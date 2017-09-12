const express = require('express');
const path = require('path');

const app = express();

app.use(require('morgan')('dev'));

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>Jest Testing</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
    </head>
    <body>
      <div id="app" />
      <script type="text/javascript" src="js/bundle.js"></script>
    </body>
  </html>
  `);
});

module.exports = app;
