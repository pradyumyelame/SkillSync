import React from 'react';
import { createRoot } from 'react-dom'; // Change import statement
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root')); // Use createRoot directly

root.render(
  <Auth0Provider
     domain="dev-auenyydunpksxpdm.us.auth0.com"
    clientId="f8YTQKlIp0n3NDJujHbEM2QvoIAwILe1"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Auth0Provider>
);
