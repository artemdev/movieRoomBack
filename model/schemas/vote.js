const findOrCreate = require('mongoose-find-or-create');

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
      default: undefined,
      required: [true, 'like is required'],
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true },
);

voteSchema.plugin(findOrCreate);

const Vote = model('vote', voteSchema);

module.exports = Vote;
