## Project Polkadot

This Contract recieves payment from an address and transfer it to a destination address.

## Development

### How to run a local node on docker
To download the latest node docker image you can visit [docker hub](https://hub.docker.com/r/purestake/moonbeam-tracing/tags). To make sure that you have the docker image downloaded and to view the image name you run  ```docker image ls``` where your image name is the name of the image + the tag. e.g ```moonbeam/v2.0.9:latest```



To spin up a local blockchain test node, you can use the following command where ***moombeam-dev:testnet*** is the name of the docker image that you are running.
```docker
docker run --rm --name moonbeam_development -p 9944:9944 moombeam-dev:testnet --dev --ws-external --rpc-external
```

