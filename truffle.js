/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

require('babel-register');

const HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
  rinkeby:{
        provider: function() {
          return new HDWalletProvider( "calm combine hip snow evil cement add type dust palace dune oxygen", "https://rinkeby.infura.io/v3/e24aadd136f442c4a0a7f589ab4b8764");
        },
        network_id:4,
        gas : 6721975,
        gasPrice: 100000000000,
        from: '0x6828e3a6B9649d112bE2948a0B098Ee55d4527fB'
      },
  ropsten:{
    provider: function() {
      return new HDWalletProvider( "calm combine hip snow evil cement add type dust palace dune oxygen", "https://ropsten.infura.io/v3/e24aadd136f442c4a0a7f589ab4b8764");
    },
    network_id:3,
    gas : 6721975,
    gasPrice: 100000000000,
    from: '0x6828e3a6B9649d112bE2948a0B098Ee55d4527fB'
  }
},
  solc: {
    version: "0.4.24",
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};

// module.exports = {
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 8545,
//       network_id: "*" // Match any network id
//     }
//   }
// };
