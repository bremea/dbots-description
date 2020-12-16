const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const getqueue = require('./methods/getqueue.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(fs.readFileSync(__dirname + '/queuescrape/index.html'));
});

app.listen(3000, () => {
  console.log('App is live at http://localhost:3000/');
});