import { BridgeContract } from "../entities/bridgeContract" 
import { networkByChainID } from "./networks"

export const BridgeContractList: BridgeContract[] = [
    { 
        network: networkByChainID(1),
        bridgeContractAddress: "", 
        zapContractAddress: ""
    }
]