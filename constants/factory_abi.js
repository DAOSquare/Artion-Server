const CollectionFactoryContract = {
  MAINNET_721_PRIVATE: '0x42395763A088091E1eC1909049d3f52957feA38A', //FantomNFTFactoryPrivate
  MAINNET_721_PUBLIC: '0xA5fC8e841CCF2a0B7663640cFe63158d27084756', //FantomNFTFactory
  TESTNET_721_PRIVATE: '0x42395763A088091E1eC1909049d3f52957feA38A', //FantomNFTFactoryPrivate
  TESTNET_721_PUBLIC: '0xA5fC8e841CCF2a0B7663640cFe63158d27084756', //FantomNFTFactory
  MAINNET_1155_PRIVATE: '0x736Eae40AdFf88570b92378c97a0D11b44E1C953', //FantomArtFactoryPrivate
  MAINNET_1155_PUBLIC: '0x520DaB621f93F59d3557174280AB1B6d4FB8c956', //FantomArtFactory
  TESTNET_1155_PRIVATE: '0x8637DBB197768e8Ad0E5cc98f738B64C10452F72', //FantomArtFactoryPrivate
  TESTNET_1155_PUBLIC: '0x864Acb6d06E24486730138245da3A612b74c1Ddf', //FantomArtFactory
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
