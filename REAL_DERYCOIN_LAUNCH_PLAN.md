# Real Derycoin Launch Plan

This is the practical path to make Derycoin a real crypto token that can be traded.

## Recommended chain

Use one of these:

1. Polygon PoS
   - Usually very cheap gas
   - Easy to use with MetaMask and Remix
   - Good for a low-budget first launch

2. Base
   - Cheap Ethereum Layer 2
   - Strong Coinbase ecosystem
   - Good if you want better visibility with newer users

For the lowest-friction launch, use Polygon PoS first.

## What "ready for trade" means

A token is tradeable only after these are done:

1. Deploy the smart contract on a real mainnet.
2. Verify the contract source code on the block explorer.
3. Create a liquidity pool on a DEX.
4. Add liquidity using DERY plus a paired asset such as USDT, USDC, ETH, POL, MATIC, or WBNB.
5. Share the token contract address and DEX pair link.

## Suggested Derycoin settings

- Name: `Derycoin`
- Symbol: `DERY`
- Decimals: `18`
- Supply: `10,000,000 DERY`
- Minting: disabled for trust, unless you have a clear reason
- Burning: enabled
- Buy/sell tax: avoid at first unless you know exactly why you need it
- Ownership: keep initially, then consider renouncing or transferring to a multisig

## Minimum budget

Deployment gas may be under $1 on low-fee chains, but making the token tradeable requires liquidity.

Example:

- Contract deployment: usually small on Polygon/Base
- Contract verification: free
- Liquidity pool creation: small gas fee
- Initial liquidity: you decide the amount

If you add only tiny liquidity, people can technically trade, but the price will move violently and buyers may not trust it.

## Example liquidity setup

If you start with:

- `100,000 DERY`
- `$100 USDC`

The starting pool implies:

- `1 DERY = $0.001`
- `10,000,000 DERY = $10,000 implied fully diluted value`

If you start with:

- `100,000 DERY`
- `$10 USDC`

The starting pool implies:

- `1 DERY = $0.0001`
- `10,000,000 DERY = $1,000 implied fully diluted value`

## DEX choices

Polygon:

- QuickSwap
- Uniswap on Polygon, if available for the pair you want

Base:

- Aerodrome
- Uniswap on Base

## Safer launch checklist

- Deploy test version on testnet first.
- Deploy final contract on mainnet.
- Verify the contract.
- Add official logo and metadata where supported.
- Create the DEX pool.
- Add initial liquidity.
- Save the token contract address.
- Save the liquidity pair address.
- Publish only the official contract address.
- Never share your wallet seed phrase or private key.

## Important warning

The current contract in `contracts/Derycoin.sol` is dependency-free and written for Remix deployment. Before using it for a real launch, compile it, test transfers and approvals, and consider an independent review.
