import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <Auth0Provider
      domain="dev-hx61dop1or6ajnlg.us.auth0.com"
      clientId="c2PYkY5aTncgZdwpdb8PFCZsJPDk69j5"
      authorizationParams={{
        redirect_uri: window.location.origin,
        scope: "openid profile email"
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>
);