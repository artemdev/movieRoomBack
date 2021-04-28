const Room = require('./schemas/room.js');

const join = (roomId, userId) => {};
const create = userId => {
  return Room.create({ owner: userId });
};

module.exports = {
  join,
  create,
};
