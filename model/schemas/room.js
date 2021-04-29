const mongoose = require('mongoose');

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
      default: '10',
    },
    movies: {
      type: Array,
    },
    url: {
      type: String,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true },
);

//generate url before create

const Room = model('room', roomSchema);

module.exports = Room;
