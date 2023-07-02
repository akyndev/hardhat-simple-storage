import { expect, assert } from "chai";
import { ethers } from "hardhat";
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types";

describe("SimpleStorage", () => {
  let SimpleStorageFactory;
  let simpleStorage: SimpleStorage;

  beforeEach(async function () {
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorageFactory.deploy();
  });
  it("Should start with a fav number of 0", async function () {
    const currentFavNumber = await simpleStorage.retrieve();
    const expectedvalue = "0";
    // assert.equal(currentFavNumber, expectedvalue)
    expect(currentFavNumber).to.equal(expectedvalue);
  });
  it("Should update when we call store", async function () {
    const store = await simpleStorage.store("77");
    await store.wait(1);
    const storedNumber = await simpleStorage.retrieve();
    const expectedvalue = "77";
    assert.equal(storedNumber.toString(), expectedvalue);
  });
});
