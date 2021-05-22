
const Room = require('./schemas/room.js');

const list = async () => {
  return await Room.find({});
};
const create = async ({ title, userId, isOpen, url, movies, votes }) => {
  return await Room.create({
    votes,
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
