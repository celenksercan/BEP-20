const truffleAssert = require('truffle-assertions');

const BEP20TokenImplementation = artifacts.require("BEP20TokenImplementation");
// const BEP20UpgradeableProxy = artifacts.require("BEP20UpgradeableProxy");
const BEP20TokenFactory = artifacts.require("BEP20TokenFactory");
const BEP20TokenImplementationV1 = artifacts.require("BEP20TokenImplementationV1");
const ApproveAndCallFallBackTest = artifacts.require("ApproveAndCallFallBackTest");
