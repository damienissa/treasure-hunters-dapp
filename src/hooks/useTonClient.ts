import { TonClient } from "@ton/ton";
import { CHAIN } from "@tonconnect/ui-react";
import { useEffect, useState } from "react";
import { getTonClient } from "./initializeTonClient";
import { useTonConnect } from "./useTonConnect";

export function useTonClient() {
    const [client, setClient] = useState<TonClient | null>(null);
    const { network } = useTonConnect();

    useEffect(() => {
        const initClient = async () => {
            if (client || !network) return;
            const tonClient = await getTonClient(
                network === CHAIN.MAINNET ? "mainnet" : "testnet"
            );
            setClient(tonClient);
        };

        initClient();
    }, [client, network]);

    return { client };
}
