const Room = require('../model/rooms.js');

const create = async (req, res) => {
  const userId = req.user.id;
  const data = { title: req.body.title, movies: req.body.movies };
  try {
    const room = await Room.create({ ...data, owner: userId });
    res.status(200).json(room);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  create,
};
