import { fromNano } from '@ton/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExpeditionResult } from '../../build/tact_TreasureHunters';
import { useTreasureHuntersContract } from '../hooks/useTreasureHuntersContract';
import PrimaryButton from './PrimaryButton';

const ExpeditionHistoryComponent: React.FC = () => {
    const { getExpeditionHistory, claimRewards } = useTreasureHuntersContract();
    const { t } = useTranslation();
    const [history, setHistory] = useState<ExpeditionResult[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        getExpeditionHistory().then((historyData) => {
            setLoading(false);
            setHistory(historyData ? Array.from(historyData.values()) : []);
        }).catch((error) => {
            setError(error.toString());
            console.error("Error fetching player count:", error);
        }).finally(() => { });

    }, [error, loading,]);

    return (
        <div style={{ padding: "16px" }}>
            <div className="expedition-character-image" />
            <div style={{ padding: "10px" }}>
                {loading ? (
                    <p>{"Loading..."}</p>
                ) : error ? (
                    <p style={{ color: "red" }}>{error}</p>
                ) : history?.length ? (
                    <div>
                        <ScrollableList expeditions={history} />

                        <div style={{ padding: '20px 12px 14px 12px' }}>
                            <PrimaryButton title={t('claim_rewards')} onClick={claimRewards} />
                        </div>
                    </div>
                ) : (
                    <p>{"No expeditions found"}</p>
                )}
            </div>
        </div>
    );
};

export default ExpeditionHistoryComponent;



const ScrollableList = ({ expeditions }: { expeditions: ExpeditionResult[] }) => {
    console.log("Expedition: ", expeditions[0].address.toString());
    const list = expeditions.map((e) => e.winners.values().map((w) => w.player.toString())).join("\n")
    console.log(list);
    return (
        <div className="game-container">
            <div className="scrollable-box">
                {expeditions.map((expedition, index) => (
                    <div key={index} className="game-text-box">
                        <p>
                            <strong>Expedition Address:</strong>{" "}
                            {shortenAddress(expedition.address.toString())}
                        </p>
                        <p>
                            <strong>Winners:</strong>
                        </p>
                        <ul>
                            {Array.from(expedition.winners.values()).map(
                                (winner) => (

                                    <div>
                                        <tr>
                                            <td>{shortenAddress(winner.player.toString())}</td>
                                            <td>{fromNano(winner.treasure)} TON</td>
                                        </tr>
                                    </div>
                                )
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};


const shortenAddress = (address: string, start = 4, end = 4): string => {
    if (address.length <= start + end) {
        return address; // If the address is short, no need to truncate
    }
    return `${address.slice(0, start)}...${address.slice(-end)}`;
};
