import { useTonConnectUI, Wallet } from '@tonconnect/ui-react';
import { useEffect, useState } from 'react';
import ConnectedWalletComponent from './ConnectedWalletComponent';
import WelcomeComponent from './WelcomeComponent';


const AppContentComponent: React.FC = () => {
    const [tonConnectUI] = useTonConnectUI();
    const [wallet, setWallet] = useState<Wallet | null>(null);
    useEffect(() => {
        tonConnectUI.onStatusChange((wallet) => {
            setWallet(wallet || null); // Explicitly set null if no wallet
        });
    }, [tonConnectUI]);

    if (!tonConnectUI.connected) {
        tonConnectUI.connectWallet();
    }
    return (
        <div>
            {wallet ? <ConnectedWalletComponent /> : <WelcomeComponent />}
        </div>

    );
};

export default AppContentComponent;