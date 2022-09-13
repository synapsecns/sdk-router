import { BridgeContract } from "./bridgeContract"
import { Network} from "./network"
import { networkByChainID } from "../constants/networks"

describe("BridgeContract", () => {
    const ADDRESS_ONE = '0x0000000000000000000000000000000000000001'
    const ADDRESS_TWO = '0x0000000000000000000000000000000000000002'

    let network: Network = {
      chainId: 1, 
      name: "Ethereum"
  }

    describe("#constructor", () => {
      it('fails with network undefined', () => {
        expect(() => new BridgeContract(networkByChainID(0), ADDRESS_ONE, ADDRESS_TWO ).bridgeContractAddress).toThrow(
          'NETWORK_UNDEFINED'
        )
      })

      it('fails with same addresses', () => {
        expect(() => new BridgeContract(network, ADDRESS_ONE, ADDRESS_ONE ).bridgeContractAddress).toThrow(
          'DUPLICATE_ADDRESS'
        )
      })


      it('fails with invalid address', () => {
            expect(() => new BridgeContract(network, '0xhello00000000000000000000000000000000002', ADDRESS_ONE ).bridgeContractAddress).toThrow(
              '0xhello00000000000000000000000000000000002 is not a valid address'
            )
          })
    })
})