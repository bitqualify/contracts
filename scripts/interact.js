const hre = require("hardhat");

async function main() {
  try {
    // Get the ContractFactory of your MyToken contract
    const BitQualify = await hre.ethers.getContractFactory("BitQualify");

    // Connect to the deployed contract
    const contractAddress = "0x543ba9FC0ade6f222BD8C7Bf50a0CD9923Faf569"; // Replace with your deployed contract address
    const contract = await BitQualify.attach(contractAddress);

    // Retrieve the balance of an account
    const account = "0x28eb8D29e4713E211D1dDab19dF3de16086BB8fa";
    const balance = await contract.balanceOf(account);

    // Retrieve the symbol of the token
    const symbol = await contract.symbol();

    console.log(
      `Balance of ${account} account: ${balance.toString()} ${symbol}`
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();