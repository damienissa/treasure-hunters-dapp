import { Address, Contract, OpenedContract, toNano } from "@ton/core";
import { useMemo } from "react";
import { Expedition } from "../contract/wrappers/Expedition";
import { BuyTicket, TreasureHunters } from "../contract/wrappers/TreasureHunters";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";

const DEFAULT_TREASURE_HUNTERS_ADDRESS = Address.parse("EQBmLju15bO6UW-9jBHQrSiYcFTtD6GActOZNGc1f_aZFgdm");
const DEFAULT_TICKET_PRICE = toNano("0.6");

function buyTicketMessage(referrer: Address | null): BuyTicket {
    return {
        $$type: "BuyTicket",
        referrer: referrer,
    };
}

export function useTreasureHuntersContract(
    treasureHuntersAddress = DEFAULT_TREASURE_HUNTERS_ADDRESS,
    ticketPrice = DEFAULT_TICKET_PRICE
) {
    const { client } = useTonClient();
    const { sender } = useTonConnect();

    // Memoize the TreasureHunters contract to initialize it only once
    const treasureHuntersContract = useMemo(() => {
        if (!client) {
            console.error("Ton client is not initialized");
            return null;
        }
        const contract: Contract = TreasureHunters.fromAddress(treasureHuntersAddress);
        return client.open(contract) as OpenedContract<TreasureHunters>;
    }, [client, treasureHuntersAddress]);

    // Function to get an Expedition contract (memoized not needed as it changes per address)
    const getExpeditionContract = async (address: Address): Promise<OpenedContract<Expedition> | null> => {
        if (!client) {
            console.error("Ton client is not initialized");
            return null;
        }
        const contract: Contract = Expedition.fromAddress(address);
        return client.open(contract) as OpenedContract<Expedition>;
    };

    return {
        getExpeditionHistory: async () => {
            if (!treasureHuntersContract) {
                console.error("Treasure Hunters contract is not initialized");
                return null;
            }

            try {
                const expeditionHistory = await treasureHuntersContract.getExpeditionHistory();
                return expeditionHistory;
            } catch (error) {
                console.error("Failed to fetch expedition history:", error);
                return null;
            }
        },
        getNumberOfCurrentPlayers: async () => {
            if (!treasureHuntersContract) {
                console.error("Treasure Hunters contract is not initialized");
                return 0;
            }

            try {
                const currentExpeditionAddress = await treasureHuntersContract.getCurrentExpedition();
                if (!currentExpeditionAddress) return 0;

                const expedition = await getExpeditionContract(currentExpeditionAddress);
                return (await expedition?.getNumberOfMembers()) || 0;
            } catch (error) {
                console.error("Failed to fetch current players:", error);
                return 0;
            }
        },
        isInTheExpedition: async () => {
            if (!treasureHuntersContract || !sender) {
                console.error("Treasure Hunters contract or sender is not initialized");
                return false;
            }

            try {
                const currentExpeditionAddress = await treasureHuntersContract.getCurrentExpedition();
                if (!currentExpeditionAddress) return false;

                const expedition = await getExpeditionContract(currentExpeditionAddress);
                const members = (await expedition?.getMembers())?.values();
                return members?.some((member) => member === sender.address) || false;
            } catch (error) {
                console.error("Failed to check expedition membership:", error);
                return false;
            }
        },
        buyTicket: async (referrer: Address | null) => {
            if (!treasureHuntersContract || !sender) {
                console.error("Treasure Hunters contract or sender is not initialized");
                return;
            }

            try {
                const result = await treasureHuntersContract.send(
                    sender,
                    { value: ticketPrice },
                    buyTicketMessage(referrer)
                );
                console.log("BuyTicket result:", result);
                return result;
            } catch (error) {
                console.error("Failed to buy ticket:", error);
            }
        },
    };
}
