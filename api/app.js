const express = require('express');
const app = express();
const headerJson = require('./data/header.json');
const mainJson = require('./data/main.json');
const lawyerJson = require('./data/lawyer.json');
const servicesJson = require('./data/services.json');
const contactJson = require('./data/contact.json');
const footerJson = require('./data/footer.json');

app.get('/header', (req, res) => {
  return res.json(headerJson);
});

app.get('/main', (req, res) => {
  return res.json(mainJson);
});

app.get('/lawyer', (req, res) => {
  return res.json(lawyerJson);
});

app.get('/services', (req, res) => {
  return res.json(servicesJson);
});

app.get('/contact', (req, res) => {
  return res.json(contactJson);
});

app.get('/footer', (req, res) => {
  return res.json(footerJson);
});

app.listen(3000, () => {
  console.log('start api in port 3000');
});
