const Room = require('../model/rooms.js');
const mongoose = require('mongoose');
const create = async (req, res) => {
  const userId = mongoose.Types.ObjectId('60882074fc39a61300f268d7');
  try {
    const room = await Room.create({ ...req.body, owner: userId });
    res.status(200).json(room);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  create,
};
