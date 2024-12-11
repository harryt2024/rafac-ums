const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const cors = require('cors');
const app = express();

// Replace with your actual Google Client ID
const CLIENT_ID = '330728490953-vpkh8np87ca1trr2np53kc7cs79sub8c.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

// Middleware
app.use(cors({ origin: 'http://localhost:3001', credentials: true }));
app.use(express.json()); // To parse JSON request bodies

// Route to verify the Google token
app.post('/auth/google/verify', async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: 'Token is missing' });
  }

  try {
    // Verify the token with Google's OAuth2 client
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,  // Ensure the audience matches the Client ID
    });

    const payload = ticket.getPayload(); // Get user data from token payload
    res.json({
      name: payload.name,
      email: payload.email,
    });
  } catch (error) {
    console.error('Error verifying Google token:', error);
    res.status(401).json({ error: 'Invalid Google token' });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
