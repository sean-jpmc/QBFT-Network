// Import the ethers.js library
const { ethers, JsonRpcProvider, ContractFactory } = require("ethers");
const fs = require("fs");
const solFile = fs.readFileSync("./Test.sol", "utf8");
const solc = require("solc");

// 11/09/23 : back from 0 with ethers.js

const provider = new JsonRpcProvider("http://localhost:8545");
const privateKey =
  "0x0ba970ff5e9b9c4ce2435fdf94a998af0b5892c4f6f7cb9c3fcb0772ae98ab54";
const wallet = new ethers.Wallet(privateKey, provider);

async function buildContract() {
  // const input = {
  //   language: "Solidity",
  //   sources: {
  //     "Test.sol": {
  //       content: solFile,
  //     },
  //   },
  //   settings: {
  //     outputSelection: {
  //       "*": {
  //         "*": ["*"],
  //       },
  //     },
  //   },
  // };
  // const output = JSON.parse(solc.compile(JSON.stringify(input)));
  // const bytecode = output.contracts["Test.sol"]["Test"].evm.bytecode.object;
  // const abi = output.contracts["Test.sol"]["Test"].abi;
  // console.log('output => ' ,output)
  // console.log('bytecode => ' ,bytecode)
  // console.log('abi => ' ,abi)
  // console.log('address => ' ,wallet.address)

  // const factory3 = new ethers.ContractFactory(abi, bytecode, wallet);
  // const nonce = await provider.getTransactionCount(wallet)
  // const contractDeployed = await factory3.deploy({
  //   gasLimit: "0x4e85c",
  //   gasPrice: "0x0",
  //   nonce: nonce
  // });

  // // ERROR IF I USE THE LINE BELLOW
  // await contractDeployed.waitForDeployment();
  // // -----------------------


  //console.log("contractDeployed ==> ", contractDeployed);

  const contractDeployedAddress = "0x3cdcd9a00d92c0dc7ace2efe639491de481fb264"; //await contractDeployed.getAddress();
  //console.log("contractDeployedAddress ==> ", contractDeployedAddress);

  const abi = '[{"inputs":[{"internalType":"uint256","name":"storedData_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"_storedData","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get","outputs":[{"internalType":"uint256","name":"storedData","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"storedData_","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
    

  const signer = wallet.connect(provider)
  const myContract = new ethers.Contract(
    contractDeployedAddress,
    abi,
    signer //wallet
  );

  //await myContract.retriveString()
  myContract['get'].staticCall().then(result => {
    console.log('result in staticCall ==> ' ,result)

    //console.log("Decoded data: ", factory3.interface.decodeFunctionData("retriveX", result.data));

  }).catch(error => {
    console.log("error ==> " ,error)
  })

//let xxx = await myContract.retriveX()
// console.log(xxx)



//   const contractTt = new ethers.Contract(contractDeployedAddress, abi, signer)
//   const value = 1000000000000000000000000n
//   await contractTt.approve(addressDl, value)
  
//   const deployedTx = contractDeployed.deploymentTransaction()
//   console.log('deployedTx ==> ' ,deployedTx)

//   myContract['retriveString'].staticCall().then(result => {
//     console.log('result in staticCall ==> ' ,result)
//   }).catch(error => {
//     console.log("error ==> " ,error)
//   })

}



buildContract();




async function sleep(number){
    return new Promise(
        (resolve) => setTimeout(resolve, number));
}