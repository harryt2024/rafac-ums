import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="330728490953-vpkh8np87ca1trr2np53kc7cs79sub8c.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
