const Collection = require('../model/schemas/collection.js');
require('../model/schemas/collection.js');
require('dotenv').config();
const axios = require('axios');

const COLLECTIONS_URL = `https://api.themoviedb.org/3/collection`;
const LANG = 'en-US';

const copy = async id => {
  const { data } = await axios.get(
    `${COLLECTIONS_URL}/${id}?api_key=${process.env.MOVIEDB_API_KEY}&language=${LANG}`,
  );

  const body = {
    id: data.id,
    name: data.name,
    overview: data.overview,
    parts: data.parts,
  };

  return await Collection.create(body);
};

const list = async () => {
  return await Collection.find({});
};

// const findById = async (id, userId) => {
//   return await Contact.findOne({ _id: id, owner: userId }).populate({
//     path: 'owner',
//     select: 'name, sex, email-_id',
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

// const create = async body => {
//   return await Contact.create(body);
// };

// const update = async (contactId, body, userId) => {
//   return await Contact.findOneAndUpdate(
//     { _id: contactId, owner: userId },
//     { ...body },
//     { new: true },
//   );
// };

module.exports = {
  copy,
  list,
};
