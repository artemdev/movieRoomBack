const Users = require('../model/users');
const { httpCode } = require('../model/helpers/constants');
const { send } = require('../services/email.js');
const fs = require('fs/promises');
const path = require('path');
const Jimp = require('jimp');

require('dotenv').config();
const createFolderIfNotExists = require('../model/helpers/createDir');

const currentUser = async (req, res, next) => {
  try {
    const id = req.user.id;
    const user = await Users.findById(id);
    if (!user) {
      return res.status(httpCode.NOTFOUND).json({
        message: 'Not authorized!',
      });
    }
    return res.status(httpCode.OK).json({
      email: user.email,
      subscription: user.subscription,
      avatar: user.avatar,
      verify: user.verify,
      name: user.name,
    });
  } catch (error) {
    next(error);
  }
};

const all = async (req, res, next) => {
  try {
    const users = await User.find({});
    const userMap = {};
    users.forEach(user => {
      userMap[user._id] = user;
    });

    return res.json({
      status: 'success',
      code: httpCode.OK,
      data: {
        userMap,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const avatars = async (req, res, next) => {
  try {
    const id = req.user.id;
    const avatarUrl = await saveAvatarToStatic(req);
    await Users.updateAvatar(id, avatarUrl);
    return res.json({
      status: 'success',
      code: httpCode.OK,
      data: {
        avatarUrl,
      },
    });
  } catch (e) {
    next(e);
  }
};

const saveAvatarToStatic = async req => {
  const id = req.user.id;
  const AVATARS_OF_USERS = process.env.AVATARS_OF_USERS;
  const pathFile = req.file.path;
  const newNameAvatar = `${Date.now()}-${req.file.originalname}`;
  const img = await Jimp.read(pathFile);
  await img
    .autocrop()
    .cover(250, 250, Jimp.HORIZONTAL_ALIGN | Jimp.VERTICAL_ALIGN_MIDDLE)
    .writeAsync(pathFile);
  await createFolderIfNotExists(path.join(AVATARS_OF_USERS, id));
  await fs.rename(pathFile, path.join(AVATARS_OF_USERS, id, newNameAvatar));
  try {
    await fs.unlink(
      path.join(process.cwd(), AVATARS_OF_USERS, req.user.avatar),
    );
  } catch (e) {
    console.log(e);
  }
  return path.normalize(path.join(id, newNameAvatar));
};

const sendEmail = async (req, res, next) => {
  try {
    const emailSent = await send();
    return res.status(httpCode.OK).json({
      data: { emailSent },
    });
  } catch (error) {
    next(error);
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const user = await Users.findByVerifyToken(req.params.token);

    if (user) {
      await Users.updateVerifyToken(user.id, true, false);
      return res.redirect('http://localhost:3000/collections');
    }
    return res.status(httpCode.BADREQUEST).json({
      status: 'Error',
      code: httpCode.BADREQUEST,
      data: 'Bad request',
      message: 'Link is not valid',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  currentUser,
  avatars,
  sendEmail,
  verifyToken,
  all,
};
