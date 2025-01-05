import { TonConnectUIProvider } from '@tonconnect/ui-react';
import React from 'react';
import './App.css';
import NotTelegramComponent from './components/NotTelegramComponent';
import WelcomeComponent from './components/WelcomeComponent';
import { isTelegramMobileApp } from './utils';


const MyApp: React.FC = () => {

  return (
    <WelcomeComponent />
  );
};

const App: React.FC = () => {
  return (
    <TonConnectUIProvider manifestUrl="https://damienissa.github.io/treasure-hunters-dapp/tonconnect-manifest.json">
      {isTelegramMobileApp() ? <MyApp /> : <NotTelegramComponent />}
    </TonConnectUIProvider>
  );
};

export default App;
