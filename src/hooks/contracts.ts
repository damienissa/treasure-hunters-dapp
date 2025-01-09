import { getHttpEndpoint, Network } from "@orbs-network/ton-access";
import { Address, OpenedContract } from "@ton/core";
import { TonClient } from "@ton/ton";
import { TreasureHunters } from "../../build/tact_TreasureHunters";
import { Expedition } from "../contract/wrappers/Expedition";


export async function getExpeditionContract(client: TonClient, address: Address): Promise<OpenedContract<Expedition>> {
    try {
        const contract = Expedition.fromAddress(address);
        return client.open(contract) as OpenedContract<Expedition>;
    } catch (error) {
        console.error("Failed to initialize Expedition contract:", error);
        throw error;
    }
}


let treasureHuntersContract: OpenedContract<TreasureHunters> | null = null;

export async function getTreasureHuntersContract(client: TonClient, address: Address): Promise<OpenedContract<TreasureHunters>> {
    if (treasureHuntersContract) {
        // Return the cached instance
        return treasureHuntersContract;
    }

    try {
        const contract = TreasureHunters.fromAddress(address);
        treasureHuntersContract = client.open(contract) as OpenedContract<TreasureHunters>;
        console.log("TreasureHunters contract initialized at address:", address.toString());
        return treasureHuntersContract;
    } catch (error) {
        console.error("Failed to initialize TreasureHunters contract:", error);
        throw error;
    }
}


let tonClient: TonClient | null = null;

export async function getTonClient(network: Network): Promise<TonClient> {
    if (tonClient) {
        // Return the cached instance
        return tonClient;
    }

    try {
        const endpoint = await getHttpEndpoint({ network });
        tonClient = new TonClient({ endpoint });
        console.log("TonClient initialized with endpoint:", endpoint);
        return tonClient;
    } catch (error) {
        console.error("Failed to initialize TonClient:", error);
        throw error;
    }
}
