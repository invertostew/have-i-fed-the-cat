const express = require('express');

const createCatController = require('../controllers/cats');

const catsRouter = express.Router();

catsRouter.post('/', createCatController);

module.exports = catsRouter;
