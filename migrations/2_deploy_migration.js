var AegisCoin = artifacts.require("./AegisEconomyCoin.sol");
var BusinessAcc = artifacts.require("./BusinessAcc.sol");
var DevelopmentAcc = artifacts.require("./DevelopmentAcc.sol");


module.exports = function (deployer) { 
    deployer.deploy(AegisCoin, 50, 50)
        .then(() => AegisCoin.deployed())
        .then(function(instance) {
            aegisInstance = instance;
        })
        .then(() => deployer.deploy(BusinessAcc, AegisCoin.address))
        .then(() => deployer.deploy(DevelopmentAcc, AegisCoin.address, 50, 50, 50, 35, 15))
        .then(() => aegisInstance.setBusinessAcc(BusinessAcc.address))
        .then(() => aegisInstance.setDevelopmentAcc(DevelopmentAcc.address))
        .then(() => true)
        .catch((err) => {
            console.log('\x1b[31m', 'Error:', err.message, '\x1b[0m');
        });
};