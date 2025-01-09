import { Address, OpenedContract, toNano } from "@ton/core";
import { TonClient } from "@ton/ton";
import { CHAIN } from "@tonconnect/ui-react";
import { useEffect, useState } from "react";
import { BuyTicket, TreasureHunters } from "../../build/tact_TreasureHunters.ts";
import { getExpeditionContract, getTonClient, getTreasureHuntersContract } from "./contracts.ts";
import { useTonConnect } from "./useTonConnect";

const TREASURE_HUNTERS_ADDRESS = Address.parse("EQBmLju15bO6UW-9jBHQrSiYcFTtD6GActOZNGc1f_aZFgdm");
const DEFAULT_TICKET_PRICE = toNano("0.6");

function buyTicketMessage(referrer: Address | null): BuyTicket {
    return {
        $$type: "BuyTicket",
        referrer: referrer,
    };
}


export function useTreasureHuntersContract() {
    const { network, sender } = useTonConnect();
    const [client, setClient] = useState<TonClient | null>(null);
    const [treasureHuntersContract, setTreasureHuntersContract] = useState<OpenedContract<TreasureHunters> | null>(null);

    useEffect(() => {
        const initialize = async () => {
            try {
                if (!network) return;

                const tonClient = await getTonClient(network === CHAIN.MAINNET ? "mainnet" : "testnet");
                setClient(tonClient);

                const contract = await getTreasureHuntersContract(tonClient, TREASURE_HUNTERS_ADDRESS);
                setTreasureHuntersContract(contract);
            } catch (error) {
                console.error("Failed to initialize contracts:", error);
            }
        };

        initialize();
    }, [network]);

    const getExpedition = async (address: Address) => {
        if (!client) {
            console.error("TonClient is not initialized");
            return null;
        }
        return getExpeditionContract(client, address);
    };

    return {
        treasureHuntersContract,
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

                const expedition = await getExpedition(currentExpeditionAddress);
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

                const expedition = await getExpedition(currentExpeditionAddress);
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
                    { value: DEFAULT_TICKET_PRICE },
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
