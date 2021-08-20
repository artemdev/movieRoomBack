const Room = require('./schemas/room.js');
const mongoose = require('mongoose');

const list = async id => {
  const _id = mongoose.Types.ObjectId(id);
  const { movies } = await Room.findOne(_id);
  return Object.values(movies);
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
const findById = async id => {
  return await Room.findOne({ _id: id });
};

module.exports = {
  create,
  list,
  findById,
};
