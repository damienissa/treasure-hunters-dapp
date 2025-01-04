import WebApp from '@twa-dev/sdk';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

const App: React.FC = () => {
  const { t } = useTranslation();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the user's first name from the WebApp SDK
    const user = WebApp.initDataUnsafe?.user;
    setUserName(user?.first_name || 'Guest'); // Default to 'Guest' if no name is available
  }, []);

  return (
    <div className="App">
      {/* Localized Button */}
      <button className="image-button">{t('wallet')}</button>
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

export default App;
