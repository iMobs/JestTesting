const express = require('express');

const app = express();

app.use(require('morgan')('dev'));

module.exports = app;
