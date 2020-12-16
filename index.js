const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('app');
});

app.listen(3000, () => {
  console.log('App is live at http://localhost:3000/');
});