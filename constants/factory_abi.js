const CollectionFactoryContract = {
  MAINNET_721_PRIVATE: '0x42395763A088091E1eC1909049d3f52957feA38A', //FantomNFTFactoryPrivate
  MAINNET_721_PUBLIC: '0xAa0A501E6f1233A0a69De9aF91f04eF42F3abba3', //FantomNFTFactory
  MAINNET_1155_PRIVATE: '0x736Eae40AdFf88570b92378c97a0D11b44E1C953', //FantomArtFactoryPrivate
  MAINNET_1155_PUBLIC: '0x520DaB621f93F59d3557174280AB1B6d4FB8c956', //FantomArtFactory
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
