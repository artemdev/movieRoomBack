const Room = require("../model/rooms.js");

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

const findRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.roomId);
    if (room) {
      return res.status(200).json({
        status: "success",
        code: 200,
        data: {
          room,
        },
      });
    }
    return res.status(401).json({
      status: "error",
      code: 401,
      message: "BAD REQUEST",
    });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
  findRoom,
};
