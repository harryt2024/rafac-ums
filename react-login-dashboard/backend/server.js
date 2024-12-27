const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // To handle cross-origin requests
const path = require('path');

// Import routes
const uniformRoutes = require('./routes/uniforms');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON requests

// Connect to MongoDB
mongoose.connect('mongodb+srv://invent:uzVSn3D0LuV7juZw@cluster0.9xzya.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Serve static files (if deploying)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Use routes
app.use('/api', uniformRoutes); // Prefix all uniform routes with /api

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is running!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
