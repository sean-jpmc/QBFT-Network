// Import the ethers.js library
const { ethers, JsonRpcProvider, ContractFactory } = require("ethers");
const fs = require("fs");
const solFile = fs.readFileSync("./Test.sol", "utf8");
const solc = require("solc");

// 11/09/23 : back from 0 with ethers.js

const provider = new JsonRpcProvider("http://localhost:8545");
const privateKey =
  "0xae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f";
const wallet = new ethers.Wallet(privateKey, provider);

async function buildContract() {
  const input = {
    language: "Solidity",
    sources: {
      "Test.sol": {
        content: solFile,
      },
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };
  const output = JSON.parse(solc.compile(JSON.stringify(input)));
  const bytecode = output.contracts["Test.sol"]["Test"].evm.bytecode.object;
  const abi = output.contracts["Test.sol"]["Test"].abi;
  console.log('output => ' ,output)
  console.log('bytecode => ' ,bytecode)
  console.log('abi => ' ,abi)

  const factory3 = new ethers.ContractFactory(abi, bytecode, wallet);
  const nonce = await provider.getTransactionCount(wallet)
  const contractDeployed = await factory3.deploy({
    gasLimit: "0x4e85c",
    gasPrice: "0x0",
    nonce: nonce
  });

  // ERROR IF I USE THE LINE BELLOW
  await contractDeployed.waitForDeployment();
  // -----------------------

  console.log("contractDeployed ==> ", contractDeployed);

  const contractDeployedAddress = await contractDeployed.getAddress();
  console.log("contractDeployedAddress ==> ", contractDeployedAddress);

  const myContract = new ethers.Contract(
    contractDeployedAddress,
    abi,
    wallet
  );
  
  const deployedTx = contractDeployed.deploymentTransaction()
  console.log('deployedTx ==> ' ,deployedTx)

  myContract['retriveX'].staticCall().then(result => {
    console.log('result in staticCall ==> ' ,result)
  }).catch(error => {
    console.log("error ==> " ,error)
  })

}

buildContract();