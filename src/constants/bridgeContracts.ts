import { BridgeContract } from "../entities/bridgeContract" 
import { networkByChainID } from "./networks"

export const BridgeContractList: BridgeContract[] = [
    { 
        network: networkByChainID(1),
        bridgeContractAddress: "0x2796317b0fF8538F253012862c06787Adfb8cEb6", 
        zapContractAddress: "0x6571d6be3d8460CF5F7d6711Cd9961860029D85F"
    },
    { 
        network: networkByChainID(10),
        bridgeContractAddress: "0xAf41a65F786339e7911F4acDAD6BD49426F2Dc6b", 
        zapContractAddress: "0xAf41a65F786339e7911F4acDAD6BD49426F2Dc6b"
    },
    { 
        network: networkByChainID(25),
        bridgeContractAddress: "0xE27BFf97CE92C3e1Ff7AA9f86781FDd6D48F5eE9", 
        zapContractAddress: "0x470f9522ff620eE45DF86C58E54E6A645fE3b4A7"
    },
    { 
        network: networkByChainID(56),
        bridgeContractAddress: "0xd123f70AE324d34A9E76b67a27bf77593bA8749f", 
        zapContractAddress: "0x749F37Df06A99D6A8E065dd065f8cF947ca23697"
    },
    { 
        network: networkByChainID(137),
        bridgeContractAddress: "0x8F5BBB2BB8c2Ee94639E55d5F41de9b4839C1280", 
        zapContractAddress: "0x1c6aE197fF4BF7BA96c66C5FD64Cb22450aF9cC8"
    },
    { 
        network: networkByChainID(250),
        bridgeContractAddress: "0xAf41a65F786339e7911F4acDAD6BD49426F2Dc6b", 
        zapContractAddress: "0xB003e75f7E0B5365e814302192E99b4EE08c0DEd"
    }
]