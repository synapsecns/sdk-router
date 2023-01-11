import { SynapseRouter } from "./synapseRouter";
import { Provider } from '@ethersproject/abstract-provider'
import { providers } from 'ethers'

import { SupportedChainId, ROUTER_ADDRESS } from "./constants"

describe('SynapseRouter', () => {
    const provider: Provider = new providers.AlchemyProvider('mainnet', 'demo')

    describe('#constructor', () => {
        it('fails with undefined chain id', () => {
            expect(() => new SynapseRouter(undefined as any, provider)).toThrow('CHAIN_ID_UNDEFINED');
        })

        it('fails with undefined provider', () => {
            expect(() => new SynapseRouter(1, undefined as any)).toThrow('PROVIDER_UNDEFINED');
        })

        it('succeeds with correct contract address', () => {
            for (let chainId of Object.keys(SupportedChainId).filter(x => (parseInt(x) > 0))) {
                expect(new SynapseRouter(chainId as any, provider).routerContract.address).toEqual(ROUTER_ADDRESS[chainId as keyof object])
            }
        })
    })
})
