const User = require("./schemas/user.js");

const findByEmail = async (email) => {
  return await User.findOne({ email: email });
};
const findByVerifyToken = async (verifyToken) => {
  return await User.findOne({ verifyToken });
};
const findByToken = async (verifyToken) => {
  return await User.findOne({ verifyToken });
};

const findById = async (id) => {
  return await User.findOne({ _id: id });
};
const create = async ({ name, email, password, sex, verify, verifyToken }) => {
  const user = new User({ name, email, password, sex, verify, verifyToken });
  return await user.save();
  //TODO
  // return await User.create({
  //   name,
  //   email,
  //   password,
  //   sex,
  //   verify,
  //   verifyToken,
  // });
};

const updateToken = async (id, token) => {
  return await User.updateOne({ _id: id }, { token: token });
};

const updateVerifyToken = async (id, verify, verifyToken) => {
  return await User.updateOne({ _id: id }, { verify, verifyToken });
};

const updateAvatar = async (id, avatar) => {
  return await User.updateOne({ _id: id }, { avatar: avatar });
};

// const verify = async () => {};
module.exports = {
  findByEmail,
  findByVerifyToken,
  create,
  updateToken,
  updateVerifyToken,
  findById,
  updateAvatar,
  //   verify,
};
