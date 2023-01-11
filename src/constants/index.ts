import JSBI from 'jsbi';

export enum SupportedChainId {
  MAINNET = 1,
  ARBITRUM_ONE = 42161,
  OPTIMISM = 10,
  POLYGON = 137,
}

export const ROUTER_ADDRESS: object = {
  [SupportedChainId.MAINNET]: '0x2796317b0fF8538F253012862c06787Adfb8cEb6',
  [SupportedChainId.ARBITRUM_ONE]: '0x2796317b0fF8538F253012862c06787Adfb8cEb6',
  [SupportedChainId.OPTIMISM]: '0x2796317b0fF8538F253012862c06787Adfb8cEb6',
  [SupportedChainId.POLYGON]: '0x2796317b0fF8538F253012862c06787Adfb8cEb6',
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
