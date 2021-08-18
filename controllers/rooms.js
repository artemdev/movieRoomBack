const Rooms = require('../model/rooms');
const { httpCode } = require('../model/helpers/constants');

require('dotenv').config();

const create = async (req, res) => {
  try {
    const body = req.body;
    const room = await Rooms.create(body);
    return res.status(httpCode.OK).json(room);
  } catch (error) {
    return res.status(httpCode.REJECTED).json({
      error,
    });
  }
};

const list = async (req, res) => {
  const { roomId } = req.query;
  try {
    const movies = await Rooms.list(roomId);
    return res.status(httpCode.OK).json({
      ...movies[0],
    });
  } catch (error) {
    return res.status(httpCode.REJECTED).json({
      error,
    });
  }
};

module.exports = {
  list,
  create,
};
