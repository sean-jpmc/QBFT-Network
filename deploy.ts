import { ethers } from 'ethers'

const provider = new ethers.JsonRpcProvider('http://127.0.0.1:8545')

let key: string = 'ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f'
let wallet = new ethers.Wallet(key)
const signer = wallet.connect(provider)

async function main() {

    
    // const transactionObject = {
    //     to: null,
    //     gasPrice: "0",
    //     gasLimit: "2100000",
    //     nonce: nonce,
    //     value: "5000000000000000000"
    //   };

    // const transactionObject = {
    //     to: null,
    //     gasPrice: "0",
    //     gasLimit: "999999",
    //     data: '0x6080604052348015600e575f80fd5b5061014e8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c806313bdfacd1461002d575b5f80fd5b61003561004b565b60405161004291906100f8565b60405180910390f35b60606040518060400160405280600c81526020017f48656c6c6f20576f726c64210000000000000000000000000000000000000000815250905090565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6100ca82610088565b6100d48185610092565b93506100e48185602086016100a2565b6100ed816100b0565b840191505092915050565b5f6020820190508181035f83015261011081846100c0565b90509291505056fea2646970667358221220774a1f3d1b4c8070a9549ddb933c70a0d8245fbb46affe76e28a5a4fe10370aa64736f6c63430008190033',
    //     //data: '0x6080604052348015600e575f80fd5b5061014e8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c806313bdfacd1461002d575b5f80fd5b61003561004b565b60405161004291906100f8565b60405180910390f35b60606040518060400160405280600c81526020017f48656c6c6f20576f726c64210000000000000000000000000000000000000000815250905090565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6100ca82610088565b6100d48185610092565b93506100e48185602086016100a2565b6100ed816100b0565b840191505092915050565b5f6020820190508181035f83015261011081846100c0565b90509291505056fea264697066735822122007aed2cd4dfc7f4dcbba769e123904039bc1f444749b8f94047a3b66e3e69d3264736f6c63430008190033',
    //     //data: bin,
    //     from: '0xf17f52151EbEF6C7334FAD080c5704D77216b732',
    //     nonce: nonce
    // }
    // wallet = new ethers.Wallet(key, provider);
    // console.log(`Sending transaction...`)
    // const transaction = await wallet.sendTransaction(transactionObject);
    // console.log('Transaction hash:', transaction.hash);


    // let nonce = await provider.getTransactionCount(signer.address)

    // wallet = new ethers.Wallet(key, provider);
    // let tx = new ethers.Transaction()
    // tx.chainId = 1337
    // tx.gasLimit = "999999"
    // tx.nonce = nonce

    // /**
    //  * deploy contract (doesn't work)
    //  */
    // tx.data = '0x6080604052348015600e575f80fd5b5061014e8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c806313bdfacd1461002d575b5f80fd5b61003561004b565b60405161004291906100f8565b60405180910390f35b60606040518060400160405280600c81526020017f48656c6c6f20576f726c64210000000000000000000000000000000000000000815250905090565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6100ca82610088565b6100d48185610092565b93506100e48185602086016100a2565b6100ed816100b0565b840191505092915050565b5f6020820190508181035f83015261011081846100c0565b90509291505056fea2646970667358221220774a1f3d1b4c8070a9549ddb933c70a0d8245fbb46affe76e28a5a4fe10370aa64736f6c63430008190033',
    // tx.to = null
    // tx.value = 0

    // /**
    //  * send value (works)
    //  */
    // // tx.to = signer.address
    // // tx.value = "5000000000000000000"


    // const transaction = await wallet.sendTransaction(tx)
    // console.log('Transaction hash:', transaction.hash);

    // let receipt = await transaction.wait();
    // console.log(receipt)

    const abi = '[{"inputs":[{"internalType":"uint256","name":"storedData_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"_storedData","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get","outputs":[{"internalType":"uint256","name":"storedData","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"storedData_","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
    const bin = '0x6080604052348015600e575f80fd5b5060405161020f38038061020f8339818101604052810190602e9190606b565b805f81905550506091565b5f80fd5b5f819050919050565b604d81603d565b81146056575f80fd5b50565b5f815190506065816046565b92915050565b5f60208284031215607d57607c6039565b5b5f6088848285016059565b91505092915050565b6101718061009e5f395ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c806360fe47b1146100435780636d4ce63c1461005f578063985a3a131461007d575b5f80fd5b61005d600480360381019061005891906100e8565b61009b565b005b6100676100a4565b6040516100749190610122565b60405180910390f35b6100856100ac565b6040516100929190610122565b60405180910390f35b805f8190555050565b5f8054905090565b5f5481565b5f80fd5b5f819050919050565b6100c7816100b5565b81146100d1575f80fd5b50565b5f813590506100e2816100be565b92915050565b5f602082840312156100fd576100fc6100b1565b5b5f61010a848285016100d4565b91505092915050565b61011c816100b5565b82525050565b5f6020820190506101355f830184610113565b9291505056fea2646970667358221220a642c16dcc687951cd6f610d5d353043044ae390caf7423c158625818e33cec564736f6c63430008190033'

    const factory = new ethers.ContractFactory(
        abi,
        bin,
        signer
    )

    let txn = await factory.getDeployTransaction(13, {gasLimit: "999999", gasPrice: "0"})

    let wallet = new ethers.Wallet(key, provider)
    console.log(`Sending transaction...`)
    const transaction = await wallet.sendTransaction(txn)
    console.log('Transaction hash:', transaction.hash)

    await transaction.wait()

    //await factory.deploy()

    process.exit()
}


    
main();