var web3jsraw = require('web3js-raw');
var BCInfo =  require('../BlockchainInfo');
const fs = require('fs');
var source = fs.readFileSync('./build/contracts/DevelopmentAcc.json', 'utf8');

const Params = {
    ABI: JSON.parse(source)["abi"],
    ADDRESS: JSON.parse(source)["networks"]["3"]["address"], //Set the relevant Network Id
    ETHER_ACC : BCInfo.Params.ETHER_ACC,
    ETHER_PKEY : new Buffer(BCInfo.Params.PVT_KEY, 'hex')
};

function getWeb3R()
{
    var W3JSR = new web3jsraw();
    W3JSR.getWeb3(Params.ABI, Params.ADDRESS, BCInfo.Params.PROVIDER_NODE);

    return W3JSR;
};

//Export the Web3JSR object and the Parameters
module.exports = {getWeb3R, Params};
