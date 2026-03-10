const express = require('express');
const path = require('path');

const app = express();
const PORT = 3005; // Node.js слушает HTTP, nginx проксирует на него

// Отдаём статические файлы React
app.use(express.static(path.join(__dirname, 'build')));

// Все пути на index.html (React SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Запуск HTTP сервера
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Node.js server running on port ${PORT}`);
});
