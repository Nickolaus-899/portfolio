const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');

const app = express();
const HTTP_PORT = 80; // HTTP
const HTTPS_PORT = 3005; // HTTPS (443 default)

const KEY_PATH = '/etc/letsencrypt/live/nikolaus-portfolio.ru'
// /etc/letsencrypt/live/nikolaus-portfolio.online

const privateKey = fs.readFileSync(`${KEY_PATH}/privkey.pem`, 'utf8');
const certificate = fs.readFileSync(`${KEY_PATH}/cert.pem`, 'utf8');
const ca = fs.readFileSync(`${KEY_PATH}/chain.pem`, 'utf8');

const credentials = { key: privateKey, cert: certificate, ca: ca };

app.use(express.static(path.join(__dirname, 'build')));

// Redirect HTTP to HTTPS
const httpApp = express();
httpApp.use((req, res) => {
    res.redirect(`https://${req.hostname}${req.url}`);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// HTTP server
httpApp.listen(HTTP_PORT, () => {
    console.log(`HTTP server running and redirecting to HTTPS on port ${HTTP_PORT}`);
});

// HTTPS server
https.createServer(credentials, app).listen(HTTPS_PORT, () => {
    console.log(`HTTPS server running on port ${HTTPS_PORT}`);
});
