import { Address, Contract, OpenedContract, toNano } from "@ton/core";
import { TreasureHunters } from "../contract/wrappers/TreasureHunters";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";

export function useTreasureHuntersContract() {
    const { client } = useTonClient();
    const { sender } = useTonConnect();

    const treasureHuntersContract = useAsyncInitialize(async () => {
        if (!client) return;

        const contract: Contract = TreasureHunters.fromAddress(
            Address.parse("EQC0hUHEAwfhLvloU1uivcXXabiE7f3XTkZ38g5w3hWBE3w2")
        );

        return client.open(contract) as OpenedContract<TreasureHunters>;
    });

    return {
        treasureHuntersContract,
        buyTicket: () => {
            treasureHuntersContract?.send(sender, {
                value: toNano("10"),

            }, {
                $$type: 'BuyTicket',
            });
        }
    };
}
