import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom'; // 👈 Import HashRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter> {/* 👈 Wrap App in HashRouter */}
      <App />
    </HashRouter>
  </StrictMode>,
);
