import { Network } from '../entities/network';
import { GasToken } from '../entities/gas';

export const SupportedNetworkList: Network[] = [
  {
    chainId: 1,
    name: 'Ethereum',
    icon:
      'https://defillama.com/_next/image?url=%2Fchain-icons%2Frsz_ethereum.jpg&w=48&q=75',
    currency: new GasToken(1, 18, 'ETH', 'Ethereum'),
  },
  {
    chainId: 10,
    name: 'Optimism',
    currency: new GasToken(10, 18, 'ETH', 'Ethereum'),
  },
  {
    chainId: 25,
    name: 'Cronos',
    currency: new GasToken(25, 18, 'CRO', 'Cronos'),
  },
  {
    chainId: 56,
    name: 'BNB Chain',
    currency: new GasToken(56, 18, 'BNB', 'BNB'),
  },
  {
    chainId: 137,
    name: 'Polygon',
    currency: new GasToken(137, 18, 'MATIC', 'Polygon'),
  },
  {
    chainId: 250,
    name: 'FANTOM',
    currency: new GasToken(250, 18, 'FTM', 'Fantom'),
  },
];

export const networkByChainID = (chainId: number): Network | undefined => {
  const x = SupportedNetworkList.find(el => {
    return el.chainId == chainId;
  });
  return x;
};

export const supportedChainIDsList = (): Number[] => {
  let chainIDs: Number[] = [];
  SupportedNetworkList.forEach(network => {
    chainIDs.push(network.chainId);
  });
  return chainIDs;
};
