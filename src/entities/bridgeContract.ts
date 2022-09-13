import invariant from 'tiny-invariant';
import { validateAndParseAddress } from '../utils/validateAndParseAddress';
import { Network } from './network';

export class BridgeContract {
  /**
   * Returns the network object associated with the Bridge Contract
   */
  public readonly network: Network | undefined;

  /**
   * Returns the SynapseBridge.sol contract address on the chain that this Bridge contract lives on
   */
  public readonly bridgeContractAddress: string;

  /**
   * Returns the Zap.sol contract address on the chain that this Zap contract lives on
   */
  public readonly zapContractAddress: string;

  public constructor(
    network: Network | undefined,
    bridgeContractAddress: string,
    zapContractAddress: string
  ) {
    invariant(network != undefined, 'NETWORK_UNDEFINED');
    invariant(bridgeContractAddress != zapContractAddress, 'DUPLICATE_ADDRESS');
    this.network = network;
    this.bridgeContractAddress = validateAndParseAddress(bridgeContractAddress);
    this.zapContractAddress = validateAndParseAddress(zapContractAddress);
  }
}
