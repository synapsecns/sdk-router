import { SynapseRouter } from "./synapseRouter";
import { Provider } from '@ethersproject/abstract-provider'
import { providers } from 'ethers'
import { SupportedChainId, ROUTER_ADDRESS } from "./constants"
import JSBI from "jsbi";

describe('SynapseRouter', () => {
    const arbitrumProvider: Provider = new providers.JsonRpcProvider("https://arb1.arbitrum.io/rpc")

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

    describe('get amount out', () => {
        it('get amount', async () => {
            // let synapseRouter = new SynapseRouter(42161, arbitrumProvider);
            // console.log(await synapseRouter.getAmountOut(
            //     "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
            //     "0x2913e812cf0dcca30fb28e6cac3d2dcff4497688",
            //     JSBI.BigInt("1")
            // ))
        })
    })

    describe('Bridge', () => {
        it('Bridge with nUSD', async () => {
        let synapseRouter = new SynapseRouter(42161, arbitrumProvider);

        console.log(await synapseRouter.routerContract.populateTransaction.bridge(
            "0x0AF91FA049A7e1894F480bFE5bBa20142C6c29a9",
            43114,
            "0x2913E812Cf0dcCA30FB28E6Cac3d2DCFF4497688",
            JSBI.BigInt(10),
            ["0x0000000000000000000000000000000000000000",
            "0x0000000000000000000000000000000000000000",
            0,
            0,
            "0x0000000000000000000000000000000000000000"],
            ["0x0000000000000000000000000000000000000000",
            "0x0000000000000000000000000000000000000000",
            0,
            0,
            "0x0000000000000000000000000000000000000000"]
            ))
        })
    })
})
