// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IERC20 {
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 value) external returns (bool);
    function allowance(address tokenOwner, address spender) external view returns (uint256);
    function approve(address spender, uint256 value) external returns (bool);
    function transferFrom(address from, address to, uint256 value) external returns (bool);
}

interface IERC20Metadata is IERC20 {
    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function decimals() external view returns (uint8);
}

/// @title Derycoin
/// @notice Fixed-supply ERC-20 token designed for a simple public launch.
/// @dev No taxes, no owner minting, and no upgrade controls are included.
contract Derycoin is IERC20Metadata {
    string private constant TOKEN_NAME = "Derycoin";
    string private constant TOKEN_SYMBOL = "DERY";
    uint8 private constant TOKEN_DECIMALS = 18;
    uint256 public constant INITIAL_SUPPLY = 10_000_000 * 10 ** uint256(TOKEN_DECIMALS);

    address public owner;
    uint256 private _totalSupply;

    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    event Burn(address indexed account, uint256 value);

    error ZeroAddress();
    error InsufficientBalance();
    error InsufficientAllowance();
    error NotOwner();

    modifier onlyOwner() {
        if (msg.sender != owner) revert NotOwner();
        _;
    }

    constructor() {
        owner = msg.sender;
        _mint(msg.sender, INITIAL_SUPPLY);
        emit OwnershipTransferred(address(0), msg.sender);
    }

    function name() external pure override returns (string memory) {
        return TOKEN_NAME;
    }

    function symbol() external pure override returns (string memory) {
        return TOKEN_SYMBOL;
    }

    function decimals() external pure override returns (uint8) {
        return TOKEN_DECIMALS;
    }

    function totalSupply() external view override returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) external view override returns (uint256) {
        return _balances[account];
    }

    function allowance(address tokenOwner, address spender) external view override returns (uint256) {
        return _allowances[tokenOwner][spender];
    }

    function transfer(address to, uint256 value) external override returns (bool) {
        _transfer(msg.sender, to, value);
        return true;
    }

    function approve(address spender, uint256 value) external override returns (bool) {
        _approve(msg.sender, spender, value);
        return true;
    }

    function transferFrom(address from, address to, uint256 value) external override returns (bool) {
        uint256 currentAllowance = _allowances[from][msg.sender];
        if (currentAllowance < value) revert InsufficientAllowance();

        unchecked {
            _approve(from, msg.sender, currentAllowance - value);
        }

        _transfer(from, to, value);
        return true;
    }

    function increaseAllowance(address spender, uint256 addedValue) external returns (bool) {
        _approve(msg.sender, spender, _allowances[msg.sender][spender] + addedValue);
        return true;
    }

    function decreaseAllowance(address spender, uint256 subtractedValue) external returns (bool) {
        uint256 currentAllowance = _allowances[msg.sender][spender];
        if (currentAllowance < subtractedValue) revert InsufficientAllowance();

        unchecked {
            _approve(msg.sender, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    function burn(uint256 value) external returns (bool) {
        _burn(msg.sender, value);
        return true;
    }

    function transferOwnership(address newOwner) external onlyOwner {
        if (newOwner == address(0)) revert ZeroAddress();

        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    function renounceOwnership() external onlyOwner {
        emit OwnershipTransferred(owner, address(0));
        owner = address(0);
    }

    function _transfer(address from, address to, uint256 value) private {
        if (to == address(0)) revert ZeroAddress();

        uint256 fromBalance = _balances[from];
        if (fromBalance < value) revert InsufficientBalance();

        unchecked {
            _balances[from] = fromBalance - value;
        }

        _balances[to] += value;
        emit Transfer(from, to, value);
    }

    function _mint(address account, uint256 value) private {
        if (account == address(0)) revert ZeroAddress();

        _totalSupply += value;
        _balances[account] += value;
        emit Transfer(address(0), account, value);
    }

    function _burn(address account, uint256 value) private {
        uint256 accountBalance = _balances[account];
        if (accountBalance < value) revert InsufficientBalance();

        unchecked {
            _balances[account] = accountBalance - value;
        }

        _totalSupply -= value;
        emit Transfer(account, address(0), value);
        emit Burn(account, value);
    }

    function _approve(address tokenOwner, address spender, uint256 value) private {
        if (spender == address(0)) revert ZeroAddress();
        if (tokenOwner == address(0)) revert ZeroAddress();

        _allowances[tokenOwner][spender] = value;
        emit Approval(tokenOwner, spender, value);
    }
}
