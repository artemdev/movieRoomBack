const Room = require('./schemas/room.js');

const list = async () => {
  return await Room.find({});
};
const create = async ({ title, userId, isOpen, url, movies }) => {
  return await Room.create({
    title,
    userId,
    isOpen,
    url,
    movies,
  });
};

module.exports = {
  create,
  list,
};
