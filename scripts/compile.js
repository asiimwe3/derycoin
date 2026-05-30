const fs = require("fs");
const path = require("path");
const solc = require("solc");

const root = path.resolve(__dirname, "..");
const contractPath = path.join(root, "contracts", "Derycoin.sol");
const source = fs.readFileSync(contractPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "Derycoin.sol": {
      content: source
    }
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    },
    outputSelection: {
      "*": {
        "*": ["abi", "evm.bytecode.object"]
      }
    }
  }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
const errors = output.errors || [];

for (const item of errors) {
  const level = item.severity === "error" ? "error" : "warning";
  console[level](item.formattedMessage.trim());
}

if (errors.some((item) => item.severity === "error")) {
  process.exit(1);
}

const contract = output.contracts["Derycoin.sol"].Derycoin;
const artifactsDir = path.join(root, "artifacts");
fs.mkdirSync(artifactsDir, { recursive: true });
fs.writeFileSync(
  path.join(artifactsDir, "Derycoin.json"),
  JSON.stringify(
    {
      abi: contract.abi,
      bytecode: contract.evm.bytecode.object
    },
    null,
    2
  )
);

console.log("Compiled Derycoin successfully.");
console.log(`ABI entries: ${contract.abi.length}`);
console.log(`Bytecode bytes: ${contract.evm.bytecode.object.length / 2}`);
