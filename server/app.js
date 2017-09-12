const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(require('morgan')('dev'));

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.render('index');
});

module.exports = app;
