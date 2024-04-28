//
//import { SimpleStorage__factory } from "../typechain-types";
const { Web3 } = require('web3');
const Web3Quorum = require("web3js-quorum");

//const ethers = require('ethers')
//const provider = new ethers.JsonRpcProvider('http://127.0.0.1:8545')


async function main() {
  const web3 = new Web3("http://localhost:8545")
  const web3q = new Web3Quorum(web3);
//   const web3q = new Web3Quorum(provider);

  const bytecode = '0x6080604052348015600e575f80fd5b5061014e8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c806313bdfacd1461002d575b5f80fd5b61003561004b565b60405161004291906100f8565b60405180910390f35b60606040518060400160405280600c81526020017f48656c6c6f20576f726c64210000000000000000000000000000000000000000815250905090565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6100ca82610088565b6100d48185610092565b93506100e48185602086016100a2565b6100ed816100b0565b840191505092915050565b5f6020820190508181035f83015261011081846100c0565b90509291505056fea2646970667358221220774a1f3d1b4c8070a9549ddb933c70a0d8245fbb46affe76e28a5a4fe10370aa64736f6c63430008190033';
  //const bytecode = SimpleStorage__factory.bytecode;
      
  const contractOptions = {
    data: bytecode, // contract binary
    privateFrom: "lpnfzaflpzSawZJ0XigdLmJZZxo0JO4MkCzFTeZg4hk=",
    privateKey: "82ee11ccfa46192252653d4b50639b5030956ba9ed90a04085744dd066970c63",
    privateFor: ["LLh5mISMAvBsaCE2J7u0ahtPJWS0gIvW9m7PJruQTWA=","KVZKrrhyhnpPfe2iAoqnF3KkfCeBYakqXs0JbTgFHSU="]
  };

  console.log("Creating contract...");
  const txHash = await web3q.priv.generateAndSendRawTransaction(contractOptions);
  console.log("Getting contractAddress from txHash: ", txHash);
  

  const privateTxReceipt = await web3q.priv.waitForTransactionReceipt(txHash);
  console.log("Private Transaction Receipt: ", privateTxReceipt);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});