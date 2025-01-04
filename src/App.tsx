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
        onClick={() => alert(t('button_click'))}
      >
        {t('wallet')}
      </button>

    </div>
  );
};

export default App;
