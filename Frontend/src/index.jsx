import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-auenyydunpksxpdm.us.auth0.com"
    clientId="f8YTQKlIp0n3NDJujHbEM2QvoIAwILe1"
    authorizationParams={{
      redirect_uri: window.location.origin,
      // ✅ ADD THIS LINE with the URL you found
      audience: "https://dev-auenyydunpksxpdm.us.auth0.com/api/v2/" 
    }}
  >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Auth0Provider>
);