const express = require('express');

const {
  createCatController,
  getCatsController,
  getCatController
} = require('../controllers/cats');

const catsRouter = express.Router();

catsRouter.post('/', createCatController);
catsRouter.get('/', getCatsController);
catsRouter.get('/:catId', getCatController);

module.exports = catsRouter;
