import { Provider } from '@ethersproject/abstract-provider'
import { SynapseRouter } from './synapseRouter'
import invariant from 'tiny-invariant';

export class SynapseSDK { 
    public synapseRouters: any

    constructor(chainIds: number[], providers: Provider[]) {
        invariant(chainIds.length == providers.length, `Amount of chains and providers does not equal`);
        this.synapseRouters = {}
        for (let i = 0; i < chainIds.length; i++) {
            this.synapseRouters[chainIds[i]] = new SynapseRouter(chainIds[i] as any, providers[i])
        }
    }
}