# Deployment Preparation

This project can deploy Derycoin with Hardhat.

## Local setup

Copy `.env.example` to `.env` and fill in your own values.

```bash
DERYCOIN_PRIVATE_KEY=0xyour_wallet_private_key_without_quotes
POLYGON_AMOY_RPC_URL=https://rpc-amoy.polygon.technology
POLYGON_RPC_URL=https://polygon-rpc.com
```

Never commit `.env`. It is ignored by Git.

## Testnet deployment

Use Polygon Amoy first. It uses free testnet tokens from a faucet.

```bash
npm run deploy:amoy
```

## Mainnet deployment

Only deploy to Polygon mainnet after the testnet deployment works.

```bash
npm run deploy:polygon
```

## Output

The deploy script writes the deployed address to `deployments/<network>.json`. Deployment JSON files are ignored by Git by default because they depend on the wallet and network used.

After a real mainnet deploy, publish the official contract address manually in the README and create a new commit.

## Safety

- Do not share your seed phrase.
- Do not paste your private key into chat.
- Use a fresh deployer wallet with only the gas needed.
- Test on Polygon Amoy before using mainnet funds.
