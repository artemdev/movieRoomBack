const Room = require("./schemas/room.js");

const create = async (body) => {
  return await Room.create(body);
};

const findById = async (id) => {
  try {
    const room = await Room.findOne({ _id: id });
    return room;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  create,
  findById,
};
