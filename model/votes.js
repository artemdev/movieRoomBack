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

const create = async (body, owner) => {
  return await Vote.create({ ...body, owner });
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

const findOrCreate = async (roomId, movieId, owner, like, result) => {
  await Vote.findOrCreate(
    { roomId, movieId },
    { like },
    { owner },
    (_, vote) => {
      result.currentVote = vote;
    },
  );
};

const nextVote = async (roomId, movieId, owner, result) => {
  return await Vote.findOrCreate({ roomId, movieId }, { owner }, (_, vote) => {
    result.nextVote = vote;
  });
};

module.exports = {
  withoutLike,
  createForRoom,
  findOrCreate,
  nextVote,
  create,
};
