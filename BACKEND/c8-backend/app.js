const express = require('express');
const fs = require("fs");
const app = express();
const PORT = 8888;
const DATA_LOCATION = './data.json';
require('dotenv').config(); 

app.use(express.json());

// GET endpoint: fetch address from Positionstack
app.get('/address', async (req, res) => {
  // Get lat/lon from query string OR fallback defaults
  const lat = req.query.lat || 6.6778;
  const lon = req.query.lon || 3.1654;

  const accessKey = process.env.YOUR_API_KEY; 
  const url = `http://api.positionstack.com/v1/reverse?access_key=${accessKey}&query=${lat},${lon}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.data && data.data.length > 0) {
      const fullAddress = data.data[0].label;

      // Save result locally (optional persistence)
      fs.writeFileSync(DATA_LOCATION, JSON.stringify({ fullAddress }, null, 2));

      // Respond with the address
      return res.json({ address: fullAddress });
    } else {
      return res.status(404).json({ error: "No address found" });
    }
  } catch (error) {
    console.error("Error fetching address:", error.message);
    return res.status(500).json({ error: "Server error" });
  }
});

// Basic health check
app.get('/', (req, res) => {
  res.send('Positionstack Reverse Geocoding API is running...');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
