async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const BitQualify = await ethers.getContractFactory("BitQualify");
    const bQAddress = await BitQualify.deploy();
  
    console.log("BitQualify address:", bQAddress.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });