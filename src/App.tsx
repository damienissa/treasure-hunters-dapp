import './App.css';

import React from 'react';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      {/* Localized Button */}
      <button
        className="image-button"
      >
        {t('wallet')}
      </button>
      <div className="text-container">

        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: t('welcome_message') }}
        ></p>
        <div className="character-image" />
      </div>
    </div>
  );
};

export default App;
