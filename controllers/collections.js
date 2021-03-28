const Collection = require('../model/collections.js');

const list = async (req, res) => {
  try {
    const collections = await Collection.list();
    res.status(200).json(collections);
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

// const getById = async (req, res) => {
//   try {
//     const result = await Contacts.findById(req.params.contactId);
//     res.status(201).json(result);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// const remove = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     await Contacts.remove(req.params.contactId, userId);
//     res.status(201).json({ message: 'Deleted!' });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// const update = async (req, res) => {
//   try {
//     const body = req.body;
//     const id = req.params.contactId;
//     const userId = req.user.id;
//     const result = await Contacts.update(id, body, userId);
//     res.status(201).json(result);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

module.exports = {
  list,
  copy,
  //   getById,
  //   remove,
  //   create,
  //   update,
};
