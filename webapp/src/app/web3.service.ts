import { Injectable } from "@angular/core";

declare let require: any;
declare let window: any;
let Web3 = require('web3');
// Use existing gateway
var web3 = new Web3(window.web3.currentProvider);
let contractABI = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "mineTime",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "blockNumber",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "msgSender",
        "type": "address"
      }
    ],
    "name": "AddDoc",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "hash",
        "type": "bytes32"
      }
    ],
    "name": "addDocHash",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "hash",
        "type": "bytes32"
      }
    ],
    "name": "findDocHash",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];


@Injectable()
export class Web3Service {
  public contractDeployedAt = "0x4c03d6842fe2d7b1d486c90aee64ad444fdcb144";
  private notary = null;
  private MyContract = null;

  constructor() {
    this.createWeb3();
  }

  //sends a hash to the blockchain
  notary_send(hash, callback) {
    web3.eth.getAccounts((error, accounts) => {
      if (error) callback(error, null);
      else {
        this.notary.addDocHash(hash, {
          from: accounts[0]
        }, (error, tx) => {
          if (error) callback(error, null);
          else {
            callback(null, tx);
          }
        });
      }
    });
  }

  //looks up a hash on the blockchain
  notary_find(hash, callback) {
    this.notary.findDocHash(hash, (error, result) => {
      if (error) callback(error, null);
      else {
        let resultObj = {
          mineTime: new Date(result[0] * 1000),
          blockNumber: result[1],
          account: result[2],
        }
        callback(null, resultObj);
      }
    });
  }

  createWeb3() {
    // Check if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== "undefined") {
      this.MyContract = web3.eth.contract(contractABI);
      this.notary = this.MyContract.at(this.contractDeployedAt);
    } else {
      alert("No web3? Please trying with MetaMask!");
    }
  }

  getAccountInfo() {
    return new Promise((resolve, reject) => {
      window.web3.eth.getCoinbase((err, account) => {
        if (err === null) {
          web3.eth.getBalance(account, (err, balance) => {
            if (err === null) {
              return resolve([account, web3.fromWei(balance, "ether")]);
            } else {
              return reject("error!");
            }
          });
        }
      });
    });
  }
}