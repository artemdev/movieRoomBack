const Vote = require('../model/schemas/vote.js');

const unvoted = async (roomId, userId) => {
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

const create = async body => {
  return await Vote.create(body);
};

// const update = async (contactId, body, userId) => {
//   return await Contact.findOneAndUpdate(
//     { _id: contactId, owner: userId },
//     { ...body },
//     { new: true },
//   );
// };

module.exports = {
  unvoted,
  //   findById,
  //   remove,
  create,
  //   update,
};
