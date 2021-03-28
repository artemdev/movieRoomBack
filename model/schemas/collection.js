const mongoose = require('mongoose');

const { Schema, SchemaTypes, model } = mongoose;

const collectionSchema = new Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    overview: {
      type: String,
    },
    parts: {
      type: Array,
    },
  },
  { versionKey: false, timestamps: true },
);

const Collection = model('collection', collectionSchema);

module.exports = Collection;
