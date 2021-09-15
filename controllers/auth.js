const jwt = require('jsonwebtoken');
const Users = require('../model/users');
const { httpCode } = require('../model/helpers/constants');
const EmailService = require('../services/email');
const { nanoid } = require('nanoid');
require('dotenv').config();

const SECRET_KEY = process.env.JWT_SECRET;

const reg = async (req, res) => {
  try {
    const { email, name } = req.body;
    const user = await Users.findByEmail(email);
    console.log(user);
    if (user) {
      return res.status(httpCode.CONFLICT).json({
        status: 'error',
        code: httpCode.CONFLICT,
        data: 'Conflict',
        message: 'Email in use',
      });
    }
    //TODO email
    const verifyToken = nanoid();
    const emailService = new EmailService(process.env.NODE_ENV);
    await emailService.sendEmail(verifyToken, email, name);

    const newUser = await Users.create({
      ...req.body,
      verify: false,
      verifyToken,
    });

    const payload = Math.floor(Date.now() / 1000) - 30;

    const token = jwt.sign({ data: payload }, SECRET_KEY, {
      //TODO
      expiresIn: '300d',
    });
    await Users.updateToken(newUser._id, token);

    return res.status(httpCode.CREATE).json({
      status: 'success',
      code: httpCode.CREATE,
      data: {
        token,
        name: newUser.name,
        email: newUser.email,
        subscription: newUser.subscription,
        avatar: newUser.avatar,
        verify: newUser.verify,
      },
    });
  } catch (e) {
    console.log(e);

    res.status(httpCode.BADREQUEST).json({
      message: 'Ошибка от Joi или другой валидационной библиотеки',
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findByEmail(email);
    const validPassword = await user?.validPassword(password);
    if (!user || !validPassword) {
      //TODO
      // if (!user || !validPassword || !user.verify) {
      return res.status(httpCode.UNAUTHORIZED).json({
        status: 'error',
        code: httpCode.UNAUTHORIZED,
        message: 'Email or password is wrong',
      });
    }
    const id = user._id;
    const payload = { id };

    const token = jwt.sign(payload, SECRET_KEY, {
      //TODO
      expiresIn: '300d',
    });
    await Users.updateToken(id, token);
    // await Users.updateToken(id, user.token);
    return res.status(httpCode.OK).json({
      status: 'success',
      code: httpCode.OK,
      data: {
        token,
        verify: user.verify,
        email: user.email,
        name: user.name,
        subscription: user.subscription,
      },
    });
  } catch (e) {
    res.status(httpCode.UNAUTHORIZED).json({
      message: 'Email or password is wrong',
    });
  }
};

const logout = async (req, res) => {
  const id = req.user.id;
  await Users.updateToken(id, null);
  return res.status(httpCode.NOCONTENT).json({ message: 'Nothing' });
};

const verify = async (req, res) => {
  try {
    const user = Users.findByVerifyToken(req.params.token);
    if (user) {
      await Users.updateVerifyToken(user.id, true, null);
      return res.status(httpCode.OK).json({
        status: 'success',
        code: httpCode.OK,
        message: 'Verification successful!',
      });
    }
    return res.status(httpCode.BADREQUEST).json({
      status: 'error',
      code: httpCode.BADREQUEST,
      data: 'Bad request',
      message: 'Link is not valid',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  reg,
  login,
  logout,
  verify,
};
