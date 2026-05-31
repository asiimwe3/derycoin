import hardhatEthers from "@nomicfoundation/hardhat-ethers";
import fs from "node:fs";

if (fs.existsSync(".env")) {
  const env = fs.readFileSync(".env", "utf8");
  for (const line of env.split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)=(.*)\s*$/);
    if (match && process.env[match[1]] === undefined) {
      process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
    }
  }
}

const polygonAmoyUrl = process.env.POLYGON_AMOY_RPC_URL || "https://rpc-amoy.polygon.technology";
const polygonUrl = process.env.POLYGON_RPC_URL || "https://polygon-rpc.com";
const deployerPrivateKey = process.env.DERYCOIN_PRIVATE_KEY || "";
const accounts = deployerPrivateKey === "" ? "remote" : [deployerPrivateKey];

export default {
  plugins: [hardhatEthers],
  solidity: {
    version: "0.8.30",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      type: "edr-simulated",
      chainType: "l1"
    },
    polygonAmoy: {
      type: "http",
      chainType: "l1",
      url: polygonAmoyUrl,
      accounts
    },
    polygon: {
      type: "http",
      chainType: "l1",
      url: polygonUrl,
      accounts
    }
  }
};
