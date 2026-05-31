import fs from "node:fs";
import path from "node:path";
import { network } from "hardhat";

const connection = await network.create();
const { ethers } = connection;

const token = await ethers.deployContract("Derycoin");
await token.waitForDeployment();

const address = await token.getAddress();
const deployer = await token.runner.getAddress();
const deployment = {
  contract: "Derycoin",
  symbol: "DERY",
  address,
  deployer,
  network: connection.networkName,
  deployedAt: new Date().toISOString()
};

const deploymentsDir = path.resolve("deployments");
fs.mkdirSync(deploymentsDir, { recursive: true });
fs.writeFileSync(
  path.join(deploymentsDir, `${connection.networkName}.json`),
  `${JSON.stringify(deployment, null, 2)}\n`
);

console.log(`Derycoin deployed to ${address}`);
console.log(`Network: ${connection.networkName}`);
console.log(`Deployer: ${deployer}`);
