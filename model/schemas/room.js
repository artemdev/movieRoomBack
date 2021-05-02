const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

const { Schema, SchemaTypes, model } = mongoose;

const roomSchema = new Schema(
  {
    title: {
      type: String,
      //   required: [true, 'Please set name of the room'],
    },
    isOpen: {
      type: Boolean,
      //   required: [true, 'Room should be opened or closed'],
      default: true,
    },
    totalVotes: {
      type: String,
      default: '0',
    },
    movies: {
      type: Array,
    },
    url: {
      type: String,
      default: nanoid(),
      required: [true, 'Please specify url'],
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true },
);

roomSchema.methods.setUrl = async function () {
  return this;
};

const Room = model('room', roomSchema);

module.exports = Room;
