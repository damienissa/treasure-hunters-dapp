import { Address, Contract, OpenedContract, toNano } from "@ton/core";
import { TreasureHunters } from "../contract/wrappers/TreasureHunters";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";

export function useTreasureHuntersContract() {
    const { client } = useTonClient();
    const { sender } = useTonConnect();

    const treasureHuntersContract = async () => {
        if (!client) return;

        const contract: Contract = TreasureHunters.fromAddress(
            Address.parse("kQCIis2xLk4Sxt2FRcJtcC9-Znma0GlQMFSXix6Cayivnzun") // 0.1 per tiket
        );

        return client.open(contract) as OpenedContract<TreasureHunters>;
    };

    return {
        treasureHuntersContract,
        getNumberOfCurrentPlayers: async () => {
            const client = await treasureHuntersContract();
            const players = await client?.getNumberOfCurrentPlayers();
            return players;
        },
        buyTicket: async () => {
            const client = await treasureHuntersContract();
            const result = await client?.send(sender, {
                value: toNano("0.1"),

            }, {
                $$type: 'BuyTicket',
            });

            console.log('BuyTicket result:', result);
        }
    };
}
