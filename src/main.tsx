import WebApp from '@twa-dev/sdk';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './i18n'; // Import the i18next setup
import './index.css';

import { Buffer } from 'buffer';
window.Buffer = Buffer; // Make Buffer globally available


WebApp.ready();

// Test comment
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
