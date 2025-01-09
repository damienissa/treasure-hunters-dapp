import { Address, Contract, OpenedContract, toNano } from "@ton/core";
import { Expedition } from "../contract/wrappers/Expedition";
import { BuyTicket, TreasureHunters } from "../contract/wrappers/TreasureHunters";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";

const treasureHuntersAddress = Address.parse("EQBmLju15bO6UW-9jBHQrSiYcFTtD6GActOZNGc1f_aZFgdm");
const ticketPrice = toNano("0.6");
function buyTicketMessage(referrer: Address | null): BuyTicket {
    return {
        $$type: 'BuyTicket',
        referrer: referrer,
    };
}

export function useTreasureHuntersContract() {
    const { client } = useTonClient();
    const { sender } = useTonConnect();

    const treasureHuntersContract = async () => {
        if (!client) return;

        const contract: Contract = TreasureHunters.fromAddress(
            treasureHuntersAddress
        );

        return client.open(contract) as OpenedContract<TreasureHunters>;
    };
    const expeditionContract = async (address: Address) => {
        if (!client) return;

        const contract: Contract = Expedition.fromAddress(
            address
        );

        return client.open(contract) as OpenedContract<Expedition>;
    };

    return {
        treasureHuntersContract,
        getNumberOfCurrentPlayers: async () => {
            const client = await treasureHuntersContract();
            const currentExpeditionAddress: Address | null | undefined = await client?.getCurrentExpedition();
            if (!currentExpeditionAddress) return 0;

            const expedition = await expeditionContract(currentExpeditionAddress);
            const players = await expedition?.getNumberOfMembers();

            return players;
        },
        isInTheExpedition: async () => {
            const client = await treasureHuntersContract();
            const currentExpeditionAddress: Address | null | undefined = await client?.getCurrentExpedition();
            if (!currentExpeditionAddress) return 0;

            const expedition = await expeditionContract(currentExpeditionAddress);
            const members = await expedition?.getMembers();
            const member = members?.values().find((member) => member === sender.address);
            return member != null;
        },
        buyTicket: async (referrer: Address | null) => {
            const client = await treasureHuntersContract();
            const result = await client?.send(sender, {
                value: ticketPrice,

            }, buyTicketMessage(referrer),);

            console.log('BuyTicket result:', result);
        }
    };
}
