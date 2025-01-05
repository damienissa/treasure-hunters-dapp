import { useTonConnectUI } from '@tonconnect/ui-react';
import WebApp from '@twa-dev/sdk';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';
import CharacterComponent from './CharacterComponent';


const WelcomeComponent: React.FC = () => {
    const { t } = useTranslation();
    const [userName, setUserName] = useState<string | null>(null);
    const [tonConnectUI] = useTonConnectUI();

    useEffect(() => {
        const user = WebApp.initDataUnsafe?.user;
        setUserName(user?.first_name || 'Guest');
    }, []);



    const connectWallet = async () => {
        try {
            console.log('Attempting to open TON Connect modal...');
            await tonConnectUI.disconnect();
            await tonConnectUI.openModal();
            console.log('TON Connect modal opened successfully');
        } catch (error) {
            console.error('Failed to open wallet connection modal:', error);
        }
    };

    return (
        <div>
            <button className="image-button" onClick={connectWallet}>
                {t('wallet')}
            </button>
            <CharacterComponent title={t('welcome_message', { userName })} />
        </div>
    );
};

export default WelcomeComponent;