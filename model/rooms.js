const Room = require('./schemas/room.js');

const create = body => {
  return Room.create(body);
};

module.exports = {
  create,
};
