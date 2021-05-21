const mongoose = require("mongoose");

const { Schema, model, SchemaTypes } = mongoose;

const userSchema = new Schema(
  {
    title: {
      type: String,
    },
    userId: {
      type: String,
    },
    votes: {
      type: String,
    },
    userId: {
      type: String,
    },
    url: {
      type: String,
    },
    isOpen: {
      type: String,
      default: true,
    },
    movies: {
      type: Array,
    },
    votes: {
      type: Array,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const Room = model("room", userSchema);

module.exports = Room;
