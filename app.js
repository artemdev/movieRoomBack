const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const path = require('path');
const collectionsRouter = require('./routes/api/collections');
const authRouter = require('./routes/api/auth');
const usersRouter = require('./routes/api/users');
const roomsRouter = require('./routes/api/rooms');
const votesRouter = require('./routes/api/votes');

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/collections', collectionsRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/rooms', roomsRouter);
app.use('/votes', votesRouter);

app.get('/', (req, res) => {
  res.send(req.query);
});
app.use('/static', express.static('public'));
module.exports = app;
