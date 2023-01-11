import { SynapseSDK } from "./sdk";
import { Provider } from '@ethersproject/abstract-provider'
import { providers } from 'ethers'

describe('SynapseSDK', () => {
    const arbitrumProvider: Provider = new providers.JsonRpcProvider("https://arb1.arbitrum.io/rpc	")
    const avalancheProvider: Provider = new providers.JsonRpcProvider("https://avalanche-evm.publicnode.com")

    describe('#constructor', () => {
        it('fails with unequal amount of chains to providers', () => {
            let chainIds = [42161, 43114];
            let providers = [arbitrumProvider]
            expect(() => new SynapseSDK(chainIds, providers)).toThrowError("Amount of chains and providers does not equal")
        })

        it('succeeds with equal amount of chains to providers', async () => {
            let chainIds = [42161, 43114];
            let providers = [arbitrumProvider, avalancheProvider]
            let Synapse = new SynapseSDK(chainIds, providers);
            expect(() => Synapse.synapseRouters.length.toEqual(2))
        })
    })
})
