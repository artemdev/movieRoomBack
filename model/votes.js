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

const update = async (contactId, body, userId) => {
  return await Contact.findOneAndUpdate(
    { _id: contactId, owner: userId },
    { ...body },
    { new: true },
  );
};
const findOrCreate = (roomId, movieId, owner) => {
  // To search by one set of criteria and to save another set, simply use a second object:
  Vote.findOrCreate({ roomId }, { movieId }, { owner }, (err, result) => {
    // my new or existing model is loaded as result
    console.log(result);
  });
};

module.exports = {
  withoutLike,
  createForRoom,
  findOrCreate,
  create,
};
