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
            <div className="game-container" style={{ padding: '10px' }}>
                {loading ? (
                    <p>{'Loading...'}</p>
                ) : error ? (
                    <p style={{ color: 'red' }}>{error}</p>
                ) : history?.length ? (
                    <ul>
                        {history.map((expedition, index) => (
                            <li key={index}>
                                <p>{'Expedition Name'}: {expedition.address.toString()}</p>
                                <p>{'Result'}: {expedition.winners.values().map((e) => e.player.toString())}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>{'No expeditions found'}</p>
                )}
            </div>
        </div>
    );
};

export default ExpeditionHistoryComponent;
