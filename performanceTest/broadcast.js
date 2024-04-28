// Import the ethers.js library
const { ethers, JsonRpcProvider } = require("ethers");

const provider = new JsonRpcProvider("http://localhost:8545");
const privateKey =
  "0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63";
const wallet = new ethers.Wallet(privateKey, provider);

async function broadcast() {

  const contractDeployedAddress = "0x4245CF4518CB2C280f5e9c6a03c90C147F80B4d9"; 

  const abi = '[ { "type": "constructor", "inputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "get", "inputs": [], "outputs": [ { "name": "value", "type": "uint256", "internalType": "uint256" } ], "stateMutability": "view" }, { "type": "function", "name": "set", "inputs": [ { "name": "value_", "type": "uint256", "internalType": "uint256" } ], "outputs": [], "stateMutability": "nonpayable" } ]';

  const signer = wallet.connect(provider)
  const myContract = new ethers.Contract(
    contractDeployedAddress,
    abi,
    signer
  );

  let txn = await myContract.set(1313);
  await txn.wait();

  myContract['get'].staticCall().then(result => {
    console.log('result in staticCall ==> ' ,result)

  }).catch(error => {
    console.log("error ==> " ,error)
  })

}

broadcast();


