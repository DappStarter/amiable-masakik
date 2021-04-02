require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note remain common gesture forget food gauge'; 
let testAccounts = [
"0x481d4d83cdca798370029d8ef2f219672f3ab71540633726ee01a128b7c684c7",
"0x8313cbab7569c07def934f761439b2b1985deadc5eb6c5d3dc06f53d5806ada7",
"0xba1abb38a316452e3d36df76fd25333812388cf80bded5437c712b2726976a31",
"0xbd7ceef597d8832b5edd456f44fdd8928d680fb59179ffdbd092eb3ed28a4438",
"0x87a312a0c87c558ed1bfb88cc33280f84657458e4969f2fc637ce1f33b8149e8",
"0x566c28b8805d1405274b3139b3de7bf7f13ef102688365324b3f8057a042313b",
"0x7221822a489a79152eb42c8cf855c1030b482bb31c1eded9be01babd663fb3b4",
"0x1a190467e81d5942b07f0dd0fea53f8afd55378d77838eab45205ad0812421b1",
"0x333afcec47fe1398bc3120ad0d188739322e97a98f062b7508d0296214d41e6b",
"0xe72230eb25c5cbfd16217a8f81e94e53994ac1227a6e0889e72d8cba1d5fde5e"
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
