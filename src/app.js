const express = require('express');

const catsRouter = require('./routes/cats')

const app = express();

app.use(express.json());

app.use('/cats', catsRouter);

module.exports = app;
