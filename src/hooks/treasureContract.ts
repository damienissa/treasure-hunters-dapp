import { Address, OpenedContract } from "@ton/core";
import { TonClient } from "@ton/ton";
import { TreasureHunters } from "../contract/wrappers/TreasureHunters";

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
