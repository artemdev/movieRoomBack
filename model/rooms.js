const Room = require('./schemas/room.js');

const join = (roomId, userId) => {};
const create = body => {
  return Room.create(body);
};

module.exports = {
  join,
  create,
};
