const express = require('express');
const path = require('path');
require('dotenv').config(); // Add dotenv for environment variables

const app = express();
const PORT = process.env.PORT || 3000; // Use environment variable for port

app.use('/ebidamo/apk', express.static(path.join(__dirname, 'ebidamo', 'apk')));
app.use('/assets', express.static(path.join(__dirname, 'ebidamo', 'assets'))); // Add this line

app.get('/download/eBIDAmo.apk', (req, res) => {
    const filePath = path.join(__dirname, 'ebidamo', 'apk', 'eBIDAmo.apk');
    res.download(filePath, (err) => {
        if (err) {
            console.error('Error downloading file:', err);
            res.status(500).send('Error downloading file.');
        }
    });
});

// Catch-all route for undefined paths
app.use((req, res) => {
    res.status(404).send('Resource not found.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});