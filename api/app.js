const express = require('express');
const app = express();
const headerJson = require('./data/header.json');
const mainJson = require('./data/main.json');

app.get('/header', (req, res) => {
    return res.json(headerJson);
});

app.get('/main', (req, res) => {
    return res.json(mainJson);
});

app.listen(3000, () => {
    console.log('start api in port 3000');
});