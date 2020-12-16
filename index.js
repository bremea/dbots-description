const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    console.log(await require('./methods/getqueue.js')());
    res.render('app');
});

app.listen(3000, () => {
  console.log('App is live at http://localhost:3000/');
});