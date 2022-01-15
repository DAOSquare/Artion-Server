const CollectionFactoryContract = {
  MAINNET_721_PRIVATE: '0x4f7bBccF440673BB36BbffB63a8de9bDFd52C568', //FantomNFTFactoryPrivate
  MAINNET_721_PUBLIC: '0xce761938c71823Ca848b722B3c0979c95A3f82e5', //FantomNFTFactory
  MAINNET_1155_PRIVATE: '0x25D10d16a1e9aeFbfd375CF2a570dA1857C2C8B2', //FantomArtFactoryPrivate
  MAINNET_1155_PUBLIC: '0x3179f69C801e4f570870De63b68DCFc42E574Eb8', //FantomArtFactory
  ABI: [
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'exists',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function'
    }
  ]
};

module.exports = CollectionFactoryContract;
