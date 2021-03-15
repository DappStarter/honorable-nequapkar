require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net punch grace merry flame tide'; 
let testAccounts = [
"0xfbd2321bdfdb0f2730f58e334557fcbcde77e93db2eabd74a0ab511d13a33774",
"0xf59fe4b0196fd61b0356d20777329409d652f8e52f63b66b8648caa61a7e7dc2",
"0x6e6b33207d33a2ac1c23c9bdabcd566d6dbe987bc31634c8c085a509cd16a7c9",
"0x7e60688f9378a359fd797ce062d643728826ffb9708eea806c86bb61defdb056",
"0x0d245296dba2f146a49b742370bed1051e371ac2e9abebac2ffed6f54adc61d8",
"0x354b551454b50b245d2f90a8b3d20a9e0d7d995c794a71ca449ce99338030e8e",
"0x44abfb1fc6e2aaf3a097f08e55dacbbb0102dd4939612ffc883df6472b6b5578",
"0x6c71353195878736fe0337c1118badda613c7772d9387734899a668262786da0",
"0x4048d8b929034d6aaac3a672846478224a9ad23ddf642268ffb30e20b327869d",
"0x99e2bced618a1be96c22e545c3fbc0b760310485a8aa872e0fe601a9d9c0558e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
