import JSBI from 'jsbi';

export enum SupportedChainId {
  ARBITRUM = 42161,
  AVALANCHE = 43114,
}

export const ROUTER_ADDRESS: object = {
  [SupportedChainId.ARBITRUM]: '0xb55dfB875e5C40A110d22b43BB842025E5e2C81B',
  [SupportedChainId.AVALANCHE]: '0xe6ee2b0b52f330a2258818D8C24De67540df5268',
}

// exports for external consumption
export type BigintIsh = JSBI | string | number;

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT,
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP,
}

export const MaxUint256 = JSBI.BigInt(
  '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
);
