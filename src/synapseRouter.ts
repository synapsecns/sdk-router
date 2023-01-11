
import { Interface } from '@ethersproject/abi'
import { Contract } from '@ethersproject/contracts'
import { Provider } from '@ethersproject/abstract-provider'
import invariant from 'tiny-invariant'
import abi from './abi/SynapseRouter.json'
// import { Currency } from './entities/currency'
// import JSBI from 'jsbi'
import { ROUTER_ADDRESS } from './constants'

export class SynapseRouter {
    public static INTERFACE: Interface = new Interface(abi)
    public readonly chainId: number
    public readonly provider: Provider
    public readonly routerContract: Contract 

    constructor(chainId: number, provider: Provider) {
        invariant(chainId !== undefined, 'CHAIN_ID_UNDEFINED')
        invariant(provider !== undefined, 'PROVIDER_UNDEFINED')
        this.chainId = chainId
        this.provider = provider
        this.routerContract = new Contract(ROUTER_ADDRESS[chainId as keyof object], SynapseRouter.INTERFACE, provider)
    }

    // public static getAmountOut( 
    //     tokenIn: Currency,
    //     tokenOut: Currency,
    //     amountIn: JSBI): any { 
    // }
}

