
import { CHAIN } from "@tonconnect/ui-react";
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTonConnect } from '../hooks/useTonConnect';
import { useTreasureHuntersContract } from '../hooks/useTreasureHuntersContract';
import PlayerCounterComponent from "./PlayerCounter";
import PrimaryButton from "./PrimaryButton";

const ConnectedWalletComponent: React.FC = () => {
    const { t } = useTranslation();
    const { network } = useTonConnect();
    const { buyTicket } = useTreasureHuntersContract();

    const BuyTicket = async () => {
        buyTicket();
    };


    return (
        <div style={{ padding: '16px' }}>
            <div className="game-container" style={{ padding: '10px' }}>
                <div className="game-text-box" style={{ padding: "4px" }}>{network === CHAIN.MAINNET ? "" : "Testnet"}</div>
                <div className="game-container">
                    <div className="mom">
                        <div className="child">
                            <div className="game-text-box">{t('team_members')}</div>
                        </div>
                        <div className="child">
                            <PlayerCounterComponent />
                        </div>
                    </div>
                </div>

                <div style={{ paddingTop: "48px", paddingBottom: "48px", paddingRight: '20%', paddingLeft: '30%' }}>
                    <div className="game-text-box-bigger" style={{ paddingBottom: "12px" }}>{t('prize_places')}</div>
                    <div className="game-text-box-bigger" style={{ padding: "6px" }}>{t('prizes.top1')}</div>
                    <div className="game-text-box-bigger" style={{ padding: "6px" }}>{t('prizes.top2')}</div>
                    <div className="game-text-box-bigger" style={{ padding: "6px" }}>{t('prizes.top3')}</div>
                    <div className="game-text-box-bigger" style={{ padding: "6px" }}>{t('prizes.top4')}</div>
                    <div className="game-text-box-bigger" style={{ padding: "6px" }}>{t('prizes.top5')}</div>
                </div>
                <div className="game-text-box-bigger" style={{ paddingBottom: "0px" }}>{t('ticket_price')}</div>

                <div style={{ padding: '20px 12px 14px 12px' }}>
                    <PrimaryButton title={t('buy_ticket')} onClick={BuyTicket} />
                </div>
            </div>
            <div className="expedition-character-image" />
        </div>
    );
};

export default ConnectedWalletComponent;
