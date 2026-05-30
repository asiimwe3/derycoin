# Compile Report

Date: 2026-05-31

Command:

```bash
npm run compile
```

Result:

```text
Compiled Derycoin successfully.
ABI entries: 25
Bytecode bytes: 3224
```

Notes:

- Compiler package: `solc`
- The generated `artifacts/Derycoin.json` file is ignored by Git and can be regenerated.
- `npm audit` reports advisories in the local `solc` dependency chain through `tmp`. This is a development tooling advisory, not deployed smart contract bytecode. The suggested forced fix would install an old breaking compiler version, so it was not applied.
