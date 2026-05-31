# Derycoin

Derycoin (`DERY`) is a fixed-supply ERC-20 token project intended for deployment on a low-fee EVM-compatible blockchain.

## Token settings

- Name: `Derycoin`
- Symbol: `DERY`
- Decimals: `18`
- Planned supply: `10,000,000 DERY`
- Minting after deployment: `disabled`
- Holder burns: `enabled`
- Buy/sell tax: `none`
- Recommended first mainnet: `Polygon PoS`
- Recommended first trading pair: `DERY / USDC`
- Recommended DEX on Polygon: `QuickSwap`

## Files

- `contracts/Derycoin.sol` - Solidity token contract
- `DEPLOY_DERYCOIN.md` - Remix deployment guide
- `DEPLOYMENT_PREP.md` - Hardhat deployment setup
- `REAL_DERYCOIN_LAUNCH_PLAN.md` - Mainnet and trading launch checklist

## Compile

Install dependencies once:

```bash
npm install
```

Compile the contract:

```bash
npm run compile
```

The compiler writes a local artifact to `artifacts/Derycoin.json`. The `artifacts/` folder is ignored by Git because it can be regenerated.

## Test

Run the automated smart contract tests:

```bash
npm test
```

The test suite checks metadata, fixed supply, transfers, allowances, burning, and ownership changes.

## Deploy

Create a local `.env` file from `.env.example`, fund the deployer wallet with gas, then deploy to the Polygon Amoy testnet first:

```bash
npm run deploy:amoy
```

For Polygon mainnet:

```bash
npm run deploy:polygon
```

## Launch flow

1. Deploy and test on a free testnet.
2. Deploy the final contract on a real mainnet.
3. Verify the contract source code on the block explorer.
4. Create a liquidity pool on a DEX.
5. Add starting liquidity.
6. Publish the official contract address and trading link.

## Security note

This repository is an early launch workspace. Do not share wallet seed phrases or private keys. Review, compile, and test the contract before using it for real funds.
