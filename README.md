# Benchmark QBFT

based on [documentation](https://besu.hyperledger.org/private-networks/tutorials/qbft)


## Run Network

it's important to run them in order so the ports get allocated correctly

```
besu --data-path=data --genesis-file=../genesis.json --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all" --logging DEBUG

besu --data-path=data --genesis-file=../genesis.json --bootnodes=enode://b87a975f2fd43a9802282f286b303c4016b5452be9d091a192b79309e6157a072e807712fe59fdacb64326b698f4704e074f4812997529433a245f994f1ec7c8@127.0.0.1:30303 --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546

besu --data-path=data --genesis-file=../genesis.json --bootnodes=enode://b87a975f2fd43a9802282f286b303c4016b5452be9d091a192b79309e6157a072e807712fe59fdacb64326b698f4704e074f4812997529433a245f994f1ec7c8@127.0.0.1:30303 --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547

besu --data-path=data --genesis-file=../genesis.json --bootnodes=enode://b87a975f2fd43a9802282f286b303c4016b5452be9d091a192b79309e6157a072e807712fe59fdacb64326b698f4704e074f4812997529433a245f994f1ec7c8@127.0.0.1:30303 --p2p-port=30306 --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8548
```




