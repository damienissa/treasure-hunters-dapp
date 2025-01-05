import { TonConnectUIProvider } from '@tonconnect/ui-react';
import React from 'react';
import './App.css';
import AppContentComponent from './components/AppContent';
import NotTelegramComponent from './components/NotTelegramComponent';

const App: React.FC = () => {
  return (
    <TonConnectUIProvider manifestUrl="https://damienissa.github.io/treasure-hunters-dapp/tonconnect-manifest.json">
      {true ? <AppContentComponent /> : <NotTelegramComponent />}
    </TonConnectUIProvider>
  );
};

export default App;
