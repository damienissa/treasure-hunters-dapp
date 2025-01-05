import React from 'react';
import { useTranslation } from 'react-i18next';
import PrimaryButton from "./PrimaryButton";

const ConnectedWalletComponent: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div style={{ padding: '16px' }}>
            <div className="game-container" style={{ padding: '10px' }}>
                <div className="game-container">
                    <div className="mom">
                        <div className="child">
                            <div className="game-text-box">{t('team_members')}</div>
                        </div>
                        <div className="child">
                            <div className="game-text-box-bigger">13/20</div>
                        </div>
                    </div>
                </div>

                <div style={{ paddingLeft: '88px', paddingRight: '88px', paddingTop: "48px", paddingBottom: "48px" }}>
                    <div className="game-text-box-bigger" style={{ paddingBottom: "12px" }}>{t('prize_places')}</div>
                    <div className="game-text-box-bigger" style={{ padding: "6px" }}>{t('prizes.top1')}</div>
                    <div className="game-text-box-bigger" style={{ padding: "6px" }}>{t('prizes.top2')}</div>
                    <div className="game-text-box-bigger" style={{ padding: "6px" }}>{t('prizes.top3')}</div>
                    <div className="game-text-box-bigger" style={{ padding: "6px" }}>{t('prizes.top4')}</div>
                    <div className="game-text-box-bigger" style={{ padding: "6px" }}>{t('prizes.top5')}</div>
                </div>
                <div className="game-text-box-bigger" style={{ paddingBottom: "0px" }}>{t('ticket_price')}</div>
                <div style={{ padding: '20px 12px 14px 12px' }}>
                    <PrimaryButton title={t('buy_ticket')} onClick={() => { }} />
                </div>
            </div>
            <div className="expedition-character-image" />
        </div>
    );
};

export default ConnectedWalletComponent;
