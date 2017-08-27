const express = require('express');
const path = require('path');

const app = express();

app.use(require('morgan')('dev'));

app.use(express.static(path.resolve(__dirname, '../dist')));

module.exports = app;
