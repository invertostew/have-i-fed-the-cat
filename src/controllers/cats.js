const { Cat } = require('../models');

const createCatController = async (req, res) => {
  const cat = await Cat.create(req.body);
  res.status(201).json(cat);
};

module.exports = createCatController;
