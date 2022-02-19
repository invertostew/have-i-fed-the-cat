const { Cat } = require('../models');

const createCatController = async (req, res) => {
  const cat = await Cat.create(req.body);
  res.status(201).json(cat);
};

const getCatsController = async (req, res) => {
  const cats = await Cat.findAll();
  res.json(cats);
};

const getCatController = async (req, res) => {
  const cat = await Cat.findByPk(req.params.catId);
  res.json(cat);
};

module.exports = {
  createCatController,
  getCatsController,
  getCatController
};
