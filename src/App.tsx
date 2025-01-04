import { TonConnectUIProvider, useTonConnectUI } from '@tonconnect/ui-react';
import WebApp from '@twa-dev/sdk';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

const MyApp: React.FC = () => {
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
      await tonConnectUI.openModal();
      console.log('TON Connect modal opened successfully');
    } catch (error) {
      console.error('Failed to open wallet connection modal:', error);
    }
  };

  return (
    <div className="App">
      <button className="image-button" onClick={connectWallet}>
        {t('wallet')}
      </button>

      <div className="text-container">
        <p
          className="description"
          dangerouslySetInnerHTML={{
            __html: t('welcome_message', { userName }),
          }}
        ></p>
        <div className="character-image" />
      </div>

    </div>
  );
};

const App: React.FC = () => {
  return (
    <TonConnectUIProvider manifestUrl="https://damienissa.github.io/treasure-hunters-dapp/tonconnect-manifest.json">
      <MyApp />
    </TonConnectUIProvider>
  );
};

export default App;
