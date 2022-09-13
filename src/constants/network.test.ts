import { networkByChainID, supportedChainIDsList } from './networks';
import { GasToken } from '../entities/gas';

describe('Networks Constants', () => {
  it('All Synapse support networks are returned', () => {
    expect(supportedChainIDsList()).toEqual([1, 10, 25, 56, 137, 250]);
  });
  it('Network can be found by search and returns properly', () => {
    expect(networkByChainID(1)).toEqual({
      chainId: 1,
      name: 'Ethereum',
      icon:
        'https://defillama.com/_next/image?url=%2Fchain-icons%2Frsz_ethereum.jpg&w=48&q=75',
      currency: new GasToken(1, 18, 'ETH', 'Ethereum'),
    });
  });

  it('Non-existant network is undefined', () => {
    // console.log(networkByChainID(0))
    expect(networkByChainID(0)).toEqual(undefined);
  });

  it('Existant network is not undefined', () => {
    // console.log(networkByChainID(0))
    expect(networkByChainID(1)).not.toEqual(undefined);
  });
});
