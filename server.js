const express = require('express');
const QRCode = require('qrcode');
const path = require('path');
const app = express();
const PORT = 4000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to generate QR Code
app.get('/generate-qr', (req, res) => {
  const menuUrl = 'http://localhost:3000/menu'; // Update this URL when hosting
  QRCode.toDataURL(menuUrl, (err, url) => {
    if (err) return res.status(500).send('Error generating QR Code');
    res.send(`
      <h1>Scan the QR Code to view the menu</h1>
      <img src="${url}" alt="QR Code">
    `);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
