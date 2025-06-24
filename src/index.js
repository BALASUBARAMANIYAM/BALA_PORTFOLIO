import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const root = createRoot(document.getElementById('root'));

// Use basename only in production (GitHub Pages)
const basename = process.env.NODE_ENV === 'production' ? '/BALA_PORTFOLIO' : '';

root.render(
  <BrowserRouter basename={basename}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
