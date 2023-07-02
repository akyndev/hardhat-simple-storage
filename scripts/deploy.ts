// We require the Hardhat Runtime Environment explicitly here. This is optional
import { ethers, run, network } from "hardhat";

async function main() {
  const contractFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract...");
  const contract = await contractFactory.deploy();
  console.log("Deployed");
  const add = await contract.getAddress();
  console.log(add);
  await contract.waitForDeployment();
  const currentFavNumber = await contract.retrieve();
  console.log(currentFavNumber);
  console.log("Updating fav number");
  const store = await contract.store("77");
  await store.wait(1);
  const updatedFavNumber = await contract.retrieve();
  console.log(updatedFavNumber);
  if (network.config.chainId != 31337) {
    console.log("waiting for tnxs...");
    await contract.deploymentTransaction()!.wait(10)
    await verify(add, [])
  }
}

async function verify(contractAddress: string, args: Array<any>) {
  try {
    console.log("verifying contract...")
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error: any) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("already verified")
    } else {
      console.log(error)
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
