var Params = {
    PROVIDER_NODE: 'https://ropsten.infura.io/v3/e24aadd136f442c4a0a7f589ab4b8764',   //Insert Network URL
    CHAIN_ID: 3,         //Replace Network Id
    ETHER_ACC : '0x6828e3a6B9649d112bE2948a0B098Ee55d4527fB',  //0xdE7bba95a05B47004F90a2a0BB2055ADE28D64Eb    //This account should have an Ether balance
    PVT_KEY :  '83971f10d60836b7a48bc4a92349c27100c8d5391ec86339c3a386b01cb6bbf4',   // 1f1704fecc0f04354aece6dddd23741b8b88e45746dd0c1d00a6dbdff8a12711     //The account's private key
    GAS_LIMIT : 7500000  //Set Gas limit
};

//Export the Parameters for reference
module.exports.Params = Params;
