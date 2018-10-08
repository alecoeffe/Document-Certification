We will use the Solidity programming language to write our contract and the Truffle framework to ease development.
Install Truffle with the following command:

// npm install -g truffle

create new directory:

// mkdir SmartContracts
// cd SmartContracts

initialize our smart contract development project.

// SmartContracts$ truffle init

We can use truffle to create the file with some scaffolding code for us:

// truffle create contract Notary
// truffle create migration Notary

When the code of you're contract is finish, compile this code:

// SmartContracts$ truffle compile

We will use the official geth reference implementation
You can download the software from the Ethereum web site at https://www.ethereum.org/cli.
The cmd is:

// sudo apt-get install software-properties-common
// sudo add-apt-repository -y ppa:ethereum/ethereum
// sudo apt-get update
// sudo apt-get install ethereum

To test our contract on a real network, but without real money we will use the Rinkeby test network:

// geth --rinkeby --syncmode fast --rpc --datadir="$HOME/rinkeby/"

This may take a long time (maybe an hour in Rinkeby’s case, longer for the main network)
In a different terminal type the following to create an account:

// geth account new --datadir="$HOME/rinkeby/"

To avoid doing this every time, we can also keep an account unlocked for the whole time a node is running, by adding a command line argument:

geth --rinkeby --syncmode fast --rpc --password <(echo PASSWORD) --unlock 0 --datadir="$HOME/rinkeby/"

We can connect to the running geth instance’s interactive console by typing the following in the command line:

// geth attach ipc:/$HOME/rinkeby/geth.ipc
// geth console cmd:
                        eth.syncing 
                        eth.blockNumber
                        personal.unlockAccount(eth.coinbase, "PASSWORD", 300)
                        web3.fromWei(eth.getBalance(eth.coinbase), "ether")

Once you have some Ether and your node is in sync, we can deploy our notary contract. We will use truffle for this.

// truffle migrate --network rinkeby --reset

This should take longer now, as we are connecting to a real network and executing real transactions. We will receive deploy addresses for both the Migrations and the Notary contracts. Take note of the Notary contract’s address.

                            /**** NOTE ****/

// myGethAddressForRinkeby: 0x7429587e48b081f5BEc24717604AD4539BF0432E, PASSWORD: tardis
// contractAddressRinkeby: 0x4c03d6842fe2d7b1d486c90aee64ad444fdcb144


https://medium.com/cryptronics/ethereum-development-guide-part-1-ad0c77c3683f