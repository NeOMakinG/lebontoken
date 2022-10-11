import { ethers } from "hardhat";

const { expect } = require("chai");

describe("Lebontoken", function () {
  it("Should return the right name and symbol", async function () {
    const Lebontoken = await ethers.getContractFactory("Lebontoken");

    const lebontoken = await Lebontoken.deploy("Lebontoken", "LBT");

    await lebontoken.deployed();

    expect(await lebontoken.name()).to.equal("Lebontoken");

    expect(await lebontoken.symbol()).to.equal("LBT");
  });
});
