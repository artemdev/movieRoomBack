const Room = require('./schemas/room.js');

const create = async body => {
  return await Room.create(body);
};

const findById = async id => {
  return await Room.findOne({ _id: id });
};

module.exports = {
  create,
  findById,
};
