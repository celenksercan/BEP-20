const truffleAssert = require('truffle-assertions');

const BEP20TokenImplementation = artifacts.require("BEP20TokenImplementation");
// const BEP20UpgradeableProxy = artifacts.require("BEP20UpgradeableProxy");
const BEP20TokenFactory = artifacts.require("BEP20TokenFactory");
const BEP20TokenImplementationV1 = artifacts.require("BEP20TokenImplementationV1");
const ApproveAndCallFallBackTest = artifacts.require("ApproveAndCallFallBackTest");

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));


const fs = require('fs');

let bep20TokenAddress;

contract('Upgradeable BEP20 token', (accounts) => {
    it('Create Token', async () => {
        const BEP20TokenFactoryInstance = await BEP20TokenFactory.deployed();
        bep20FactoryOwner = accounts[0];
        bep20Owner = accounts[1];
        proxyAdmin = accounts[0];
