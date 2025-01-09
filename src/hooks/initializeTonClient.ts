import { getHttpEndpoint, Network } from "@orbs-network/ton-access";
import { TonClient } from "@ton/ton";

let cachedEndpoint: string | null = null;

export async function initializeTonClient(network: Network): Promise<TonClient | null> {
    try {
        const endpoint = cachedEndpoint || (await getHttpEndpoint({ network }));
        cachedEndpoint = endpoint; // Cache the endpoint
        console.log("Using TON endpoint:", endpoint);

        return new TonClient({ endpoint });
    } catch (error) {
        console.error("Failed to initialize TonClient:", error);
        return null;
    }
}
