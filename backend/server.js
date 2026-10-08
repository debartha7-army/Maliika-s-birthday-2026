const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const contentRoutes = require('./routes/contentRoutes');
const wishRoutes = require('./routes/wishRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes (MVC architecture)
app.use('/api', authRoutes);
app.use('/api', contentRoutes);
app.use('/api', wishRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    appName: "Matsu-Chan's 19th Birthday Surprise API",
    recipient: 'Matsurika',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`✨ Birthday Surprise Backend running on http://localhost:${PORT}`);
});

module.exports = app;
