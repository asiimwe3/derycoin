import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { ZeroAddress, parseUnits } from "ethers";

const { ethers } = await network.create();

describe("Derycoin", function () {
  async function deployToken() {
    const [owner, alice, bob] = await ethers.getSigners();
    const token = await ethers.deployContract("Derycoin");
    await token.waitForDeployment();
    return { token, owner, alice, bob };
  }

  it("deploys with the expected metadata and fixed supply", async function () {
    const { token, owner } = await deployToken();
    const initialSupply = parseUnits("10000000", 18);

    assert.equal(await token.name(), "Derycoin");
    assert.equal(await token.symbol(), "DERY");
    assert.equal(await token.decimals(), 18n);
    assert.equal(await token.INITIAL_SUPPLY(), initialSupply);
    assert.equal(await token.totalSupply(), initialSupply);
    assert.equal(await token.balanceOf(owner.address), initialSupply);
    assert.equal(await token.owner(), owner.address);
  });

  it("transfers tokens between accounts", async function () {
    const { token, alice } = await deployToken();
    const amount = parseUnits("250", 18);

    await token.transfer(alice.address, amount);

    assert.equal(await token.balanceOf(alice.address), amount);
  });

  it("supports approvals and transferFrom", async function () {
    const { token, owner, alice, bob } = await deployToken();
    const allowance = parseUnits("100", 18);
    const spend = parseUnits("40", 18);

    await token.approve(alice.address, allowance);
    await token.connect(alice).transferFrom(owner.address, bob.address, spend);

    assert.equal(await token.balanceOf(bob.address), spend);
    assert.equal(await token.allowance(owner.address, alice.address), allowance - spend);
  });

  it("burns holder tokens and reduces total supply", async function () {
    const { token } = await deployToken();
    const initialSupply = await token.totalSupply();
    const burnAmount = parseUnits("500", 18);

    await token.burn(burnAmount);

    assert.equal(await token.totalSupply(), initialSupply - burnAmount);
  });

  it("lets the owner transfer and renounce ownership", async function () {
    const { token, alice } = await deployToken();

    await token.transferOwnership(alice.address);
    assert.equal(await token.owner(), alice.address);

    await token.connect(alice).renounceOwnership();
    assert.equal(await token.owner(), ZeroAddress);
  });
});
