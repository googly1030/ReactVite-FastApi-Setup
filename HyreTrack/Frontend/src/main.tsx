import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Change 'root' to 'app' to match your index.html
ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);