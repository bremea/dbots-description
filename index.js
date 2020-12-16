const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('fuck!');
});

app.listen(3000, () => {
  console.log('App is live at http://localhost:3000/');
});