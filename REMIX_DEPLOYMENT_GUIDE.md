# Remix Deployment Guide

Use this guide when deploying Derycoin through Remix.

## Open the contract in Remix

Open this URL in your normal browser:

```text
https://remix.ethereum.org/#url=https://raw.githubusercontent.com/asiimwe3/derycoin/codex/derycoin-launch/contracts/Derycoin.sol&lang=en
```

If Remix does not import the file automatically:

1. Open https://remix.ethereum.org
2. Create `Derycoin.sol`
3. Paste the code from:
   https://raw.githubusercontent.com/asiimwe3/derycoin/codex/derycoin-launch/contracts/Derycoin.sol

## Compile

1. Open the Solidity Compiler tab.
2. Select compiler version `0.8.30` or any compatible `0.8.x` version newer than `0.8.24`.
3. Enable optimizer with `200` runs if available.
4. Compile `Derycoin.sol`.

Expected contract:

```text
Derycoin
```

## Deploy on testnet first

Use Polygon Amoy before any mainnet deployment.

1. Add Polygon Amoy to MetaMask.
2. Get free Amoy testnet POL from a faucet.
3. In Remix, open Deploy & Run Transactions.
4. Set Environment to `Injected Provider - MetaMask`.
5. Confirm MetaMask is on Polygon Amoy.
6. Select contract `Derycoin`.
7. Leave constructor fields empty.
8. Click Deploy.
9. Confirm the transaction in MetaMask.

The deployed token should have:

```text
Name: Derycoin
Symbol: DERY
Decimals: 18
Total supply: 10,000,000 DERY
```

## Deploy on Polygon mainnet

Only do this after the Amoy test deployment works.

1. Switch MetaMask to Polygon mainnet.
2. Make sure the deployer wallet has enough POL/MATIC for gas.
3. In Remix, keep Environment as `Injected Provider - MetaMask`.
4. Select contract `Derycoin`.
5. Leave constructor fields empty.
6. Click Deploy.
7. Confirm the transaction in MetaMask.

## After deployment

Save:

- Contract address
- Transaction hash
- Network name
- Deployer wallet address

Then update the README with the official contract address and push a new commit.

## Safety

- Never paste your seed phrase into Remix, GitHub, or chat.
- Do not share your private key.
- Use a fresh deployer wallet with only enough gas for deployment.
- Confirm the network before clicking Deploy.
