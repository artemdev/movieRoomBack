const Collection = require('../model/collections.js');

const list = async (req, res) => {
  try {
    const collections = await Collection.list();
    res.status(200).json(collections);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const findById = async (req, res) => {
  console.log(req.params);
  try {
    const id = req.params.id;
    const collection = await Collection.findById(id);
    res.status(200).json(collection);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const copy = async (req, res) => {
  try {
    const id = req.params.id;
    const collection = await Collection.copy(id);

    res.status(201).json(collection);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  list,
  copy,
  findById,
};
