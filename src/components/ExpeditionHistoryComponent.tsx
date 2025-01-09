import { fromNano } from '@ton/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExpeditionResult } from '../../build/tact_TreasureHunters';
import { useTreasureHuntersContract } from '../hooks/useTreasureHuntersContract';

const ExpeditionHistoryComponent: React.FC = () => {
    const { t } = useTranslation();
    const { getExpeditionHistory } = useTreasureHuntersContract();

    const [history, setHistory] = useState<Array<ExpeditionResult> | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const historyData = await getExpeditionHistory();
                setHistory(historyData?.values() ?? []);
            } catch (err) {
                setError('Failed to load expedition history');
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, [getExpeditionHistory, t]);

    return (
        <div style={{ padding: '16px' }}>
            <div className="expedition-character-image" />
            <div style={{ padding: '10px' }}>
                {loading ? (
                    <p>{'Loading...'}</p>
                ) : error ? (
                    <p style={{ color: 'red' }}>{error}</p>
                ) : history?.length ? (<ScrollableList expeditions={history} />

                ) : (
                    <p>{'No expeditions found'}</p>
                )}
            </div>
        </div>
    );
};

export default ExpeditionHistoryComponent;


const ScrollableList = ({ expeditions }: { expeditions: ExpeditionResult[] }) => {
    return (

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
                                    Player: {shortenAddress(winner.player.toString())} <br />
                                    Treasure: {fromNano(winner.treasure)} TON
                                </div>
                            )
                        )}
                    </ul>
                </div>
            ))}
        </div>

    );
};


export const shortenAddress = (address: string, start = 4, end = 4): string => {
    if (address.length <= start + end) {
        return address; // If the address is short, no need to truncate
    }
    return `${address.slice(0, start)}...${address.slice(-end)}`;
};
