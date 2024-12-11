const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Allow requests from the frontend

// Dummy user data
const users = [
  { username: 'admin', password: '1234' },
  { username: 'user1', password: 'password1' }
];

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.status(200).json({ message: 'Login successful', username });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
