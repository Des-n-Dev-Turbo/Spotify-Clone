import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import DataLayer from './store/DataLayer.jsx';

import reducer from './store/reducer.js';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataLayer reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>
);
