# Deployment Report

Date: 2026-05-31

## Local Simulated Deployment

Command:

```bash
npm run deploy
```

Result:

```text
Derycoin deployed to 0x5FbDB2315678afecb367f032d93F642f64180aa3
Network: default
Deployer: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
```

This was a local Hardhat simulated deployment only. It does not create a real token on a public blockchain.

## Verification

Commands run:

```bash
npm run hardhat:compile
npm test
npm run deploy
```

Result:

```text
Compile: passed
Tests: 5 passed, 0 failed
Local simulated deploy: passed
```
