import { getHttpEndpoint } from "@orbs-network/ton-access";
import { TonClient } from "@ton/ton";
import { CHAIN } from "@tonconnect/ui-react";
import { useAsyncInitialize } from "./useAsyncInitialize.ts";
import { useTonConnect } from "./useTonConnect";

export function useTonClient() {
    const { network } = useTonConnect();

    return {
        client: useAsyncInitialize(async () => {
            if (!network) return;

            return new TonClient({
                endpoint: await getHttpEndpoint({
                    network: network === CHAIN.MAINNET ? "mainnet" : "testnet",
                }),
            });
        }),
    };
}
