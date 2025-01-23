import { Address, OpenedContract, toNano } from "@ton/core";
import { CHAIN } from "@tonconnect/ui-react";
import { BuyTicket, Claim, ExpeditionResult, TreasureHunters } from "../../build/tact_TreasureHunters.ts";
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

function claimRewardMessage(): Claim {
    return {
        $$type: "Claim",
    };
}

async function thContract(network: CHAIN | null): Promise<OpenedContract<TreasureHunters> | null> {
    try {
        const tonClient = await getTonClient(network === CHAIN.MAINNET ? "mainnet" : "testnet");
        const contract = await getTreasureHuntersContract(tonClient, TREASURE_HUNTERS_ADDRESS);
        return contract;
    } catch (error) {
        console.error("Failed to initialize TreasureHunters contract:", error);
        throw error;
    }
}


export function useTreasureHuntersContract() {
    const { network, sender } = useTonConnect();


    const getExpedition = async (address: Address) => {
        const tonClient = await getTonClient(network === CHAIN.MAINNET ? "mainnet" : "testnet");
        if (!tonClient) {
            console.error("TonClient is not initialized");
            return null;
        }
        return getExpeditionContract(tonClient, address);
    };

    const getNumberOfCurrentPlayers = async () => {
        const treasureHuntersContract = await thContract(network);
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
    };

    const getExpeditionHistory = async (): Promise<ExpeditionResult[] | null> => {
        const treasureHuntersContract = await thContract(network);
        if (!treasureHuntersContract) {
            console.error("Treasure Hunters contract is not initialized");
            return null;
        }

        try {
            const expeditionHistory = await treasureHuntersContract.getExpeditionHistory();
            return expeditionHistory.values();;
        } catch (error) {
            console.error("Failed to fetch expedition history:", error);
            return null;
        }
    };

    return {
        getExpeditionHistory,
        getNumberOfCurrentPlayers,
        claimRewards: async () => {

            try {
                const treasureHuntersContract = await thContract(network);
                const result = await treasureHuntersContract?.send(sender, { value: toNano("0.05") }, claimRewardMessage());

                console.log("Claim Reward result:", result);
                return result;
            } catch (error) {
                console.error("Failed to claim reward:", error);
            }
        },
        isInTheExpedition: async () => {
            const treasureHuntersContract = await thContract(network);

            try {
                const currentExpeditionAddress = await treasureHuntersContract?.getCurrentExpedition();
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
            const treasureHuntersContract = await thContract(network);
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
