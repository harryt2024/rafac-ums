import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import '../App.css'

const LoginPage = ({ setUser }) => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGoogleLogin = (credentialResponse) => {
    console.log('Google credentialResponse:', credentialResponse);
    if (!credentialResponse || !credentialResponse.credential) {
      console.error('Google login failed: No credential received.');
      setError('Google login failed');
      return;
    }
    // Send token to backend
    axios
      .post('http://localhost:5000/auth/google/verify', {
        token: credentialResponse.credential,
      })
      .then((res) => {
        setUser(res.data.name);
        navigate('/dashboard');
      })
      .catch((err) => {
        console.error('Error verifying Google token:', err.response?.data || err);
        setError('Google login failed');
      });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login Page</h2>
      <div style={{ marginTop: '20px' }}>
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => setError('Google login failed')}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginPage;
