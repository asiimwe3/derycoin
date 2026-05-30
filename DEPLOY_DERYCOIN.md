# Deploying Derycoin

This folder includes a simple Solidity smart contract for Derycoin:

- Token name: `Derycoin`
- Symbol: `DERY`
- Decimals: `18`
- Supply model: fixed supply created at deployment
- Optional burn function: holders can burn their own tokens

## Can you deploy it for free?

You can deploy for free on a testnet, using free testnet tokens from a faucet.

You usually cannot deploy for free on a real public mainnet, because blockchains charge gas fees. Cheap options include networks such as Polygon, BNB Smart Chain, Base, Arbitrum, Optimism, or other EVM-compatible chains, but they still require a small amount of native coin for gas.

## Free testnet deployment with Remix

1. Open Remix:
   https://remix.ethereum.org

2. Create a new file named:
   `Derycoin.sol`

3. Paste the code from:
   `contracts/Derycoin.sol`

4. Open the Solidity Compiler tab.

5. Select compiler version:
   `0.8.24` or newer.

6. Click Compile.

7. In MetaMask, switch to a testnet such as Sepolia.

8. Get free testnet ETH from a Sepolia faucet.

9. Open the Deploy & Run Transactions tab in Remix.

10. Set Environment to:
    `Injected Provider - MetaMask`

11. Leave the constructor field empty.

    The contract already creates:

    ```text
    10,000,000 DERY
    ```

12. Click Deploy and confirm in MetaMask.

## Mainnet deployment

For a real token, choose the chain first. The same contract can be deployed on EVM-compatible chains, including Ethereum, Polygon, BNB Smart Chain, Base, and others.

Before mainnet deployment, decide:

- Whether ownership should remain with you or be renounced
- Whether you want taxes, staking, vesting, or liquidity locks outside the token contract
- Whether the project needs an audit or at least a public source-code verification

## Important warning

This is a basic educational token contract. It has not been audited. Do not use it to hold significant value until it has been reviewed and tested.
