pragma solidity ^0.4.4;

contract Notary {
    address _creator;

    struct Record {
        uint mineTime;
        uint blockNumber;
        address account;
    }

    event AddDoc(
        uint mineTime,
        uint blockNumber,
        address msgSender
    );

    // This will actually be stored on the blockchain and maps 32-byte values, our SHA-256 hashes, to an instance of our previously declared Record struct.
    mapping (bytes32 => Record) private docHashes;

    constructor() public {
        // constructor
        _creator = msg.sender;
    }
    
    // This function send the actual file content to the contract and calculate the hash value in the contract code
    function addDocHash (bytes32 hash) public {
        Record memory newRecord = Record(now, block.number, msg.sender);
        docHashes[hash] = newRecord;
        emit AddDoc(now, block.number, msg.sender);
        //... à suivre
    }

    // This function simply returns the corresponding mine time, block number and account for a given hash as a tuple
    function findDocHash (bytes32 hash) public constant returns(uint, uint, address) {
        return (docHashes[hash].mineTime, docHashes[hash].blockNumber, docHashes[hash].account);
    }

}