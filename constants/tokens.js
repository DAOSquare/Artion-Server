const DISABLED_PAYTOKENS = process.env.NETWORK_CHAINID === "250" ? [
    {
      address: '0x0000000000000000000000000000000000000000',
      name: 'Fantom',
      symbol: 'ftm',
      decimals: 18,
    }
  ] :
  [
    {
      address: '0x0000000000000000000000000000000000000000',
      name: 'Fantom',
      symbol: 'ftm',
      decimals: 18,
    }
  ]


const PAYTOKENS = [
  {
    address: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
    name: 'Wrapped XDAI',
    symbol: 'WXDAI',
    decimals: 18,
  },
  {
    address: '0x0e523901De365a9145c9822943F313b899540dF5',
    name: 'Another Test Token',
    symbol: 'ATT',
    decimals: 18,
  }
]

module.exports = { PAYTOKENS, DISABLED_PAYTOKENS };
