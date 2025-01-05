import { useTonConnectUI } from '@tonconnect/ui-react';
import CharacterComponent from "./CharacterComponent";



const ConnectedWalletComponent: React.FC = () => {
    const [tonConnectUI] = useTonConnectUI();


    const disconnectWallet = async () => {
        try {
            console.log('Attempting to open TON Connect modal...');
            await tonConnectUI.disconnect();
            console.log('TON Connect modal opened successfully');
        } catch (error) {
            console.error('Failed to open wallet connection modal:', error);
        }
    };



    return (
        <div>

            <CharacterComponent title="Ти успішно доєнав гаманець" />
            <button className="image-button" onClick={disconnectWallet}>
                Disconnect
            </button>
        </div>

    );
};

export default ConnectedWalletComponent;