const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("BitQualify", function () {
it("Should deploy bitqualify and get the address ", async function () {
  const [owner] = await ethers.getSigners();
  const bitQualify = await ethers.getContractFactory("BitQualify");
  const BitQualifyAddress = await bitQualify.deploy();
  await BitQualifyAddress.deployed();
  expect((BitQualifyAddress));
    });

  it("Should deploy bitqualify and get the address of the addmin", async function () {
    const [owner] = await ethers.getSigners();
    const bitQualify = await ethers.getContractFactory("BitQualify");
    const BitQualifyAddress = await bitQualify.deploy();
    await BitQualifyAddress.deployed();
    expect((await BitQualifyAddress.admin()).toString()).to.equal(owner.address);
      });

});