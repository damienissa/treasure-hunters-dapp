import { getHttpEndpoint, Network } from "@orbs-network/ton-access";
import { TonClient } from "@ton/ton";

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
