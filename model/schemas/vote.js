const mongoose = require('mongoose');

const { Schema, SchemaTypes, model } = mongoose;

const voteSchema = new Schema(
  {
    movieData: {
      type: Object,
    },
    movieId: {
      type: String,
    },
    roomId: {
      type: String,
    },
    like: {
      type: Boolean,
      default: null,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true },
);

const Vote = model('vote', voteSchema);

module.exports = Vote;
