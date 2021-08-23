const Vote = require('../model/schemas/vote.js');

const withoutLike = async (roomId, userId) => {
  return await Vote.find({ roomId: roomId, owner: userId, like: undefined });
};

// const findByMovieId = async (movieId, userId) => {
//   return await Vote.findOne({ movieId: movieId, owner: userId }).populate({
//     path: 'owner',
//     // select: 'name, sex, email-_id',
//   });
// };

// const remove = async (id, userId) => {
//   const contact = await Contact.findOneAndRemove({ _id: id, owner: userId });
//   if (contact) {
//     return contact;
//   } else {
//     throw new Error('Contact not found');
//   }
// };
const create = async (roomId, movieId, owner, like = null) => {
  return await Vote.create({
    roomId,
    movieId,
    owner,
    like,
  });
};
const findOne = async (roomId, owner, movieId) => {
  return await Vote.findOne({ roomId, owner, movieId });
};

const find = async (roomId, userId) => {
  return await Vote.find({ roomId, owner: userId });
};

const createForRoom = async roomId => {
  const room = await Room.findOne({ roomId });
  const userId = req.user.id;
  room.movies.forEach(movie => {
    const { roomId, movieId, movieData } = movie;
    Vote.findOrCreate({
      movieData,
      movieId,
      userId,
      roomId,
    });
  });
};

module.exports = {
  withoutLike,
  createForRoom,
  create,
  find,
  findOne,
};
