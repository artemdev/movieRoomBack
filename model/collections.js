const Collection = require("../model/schemas/collection.js");
const mongoose = require("mongoose");
require("../model/schemas/collection.js");
require("dotenv").config();
const axios = require("axios");

const COLLECTIONS_URL = `https://api.themoviedb.org/3/collection`;
const EN = "en-US";
const RU = "ru-RU";
const copy = async (id) => {
  const { data } = await axios.get(
    `${COLLECTIONS_URL}/${id}?api_key=${process.env.MOVIEDB_API_KEY}&language=${RU}`
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

const findById = async (id) => {
  return await Collection.findOne({ id });
};

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
  findById,
};
