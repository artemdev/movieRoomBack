const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const path = require('path');
const collectionsRouter = require('./routes/api/collections');
const authRouter = require('./routes/api/auth');
const usersRouter = require('./routes/api/users');
const roomsRouter = require('./routes/api/rooms');

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

const AVATARS_OF_USERS = process.env.AVATARS_OF_USERS;
app.use(express.static(path.join(__dirname, AVATARS_OF_USERS)));

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/collections', collectionsRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/rooms', roomsRouter);

app.get('/', (req, res) => {
  res.send(req.query);
});
app.use('/static', express.static('public'));
module.exports = app;
