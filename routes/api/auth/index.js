const express = require('express');
const router = express.Router();
const guard = require('../../../model/helpers/guard');
const { registrationUser, loginUser } = require('./validation');
const { reg, login, logout } = require('../../../controllers/auth');

router.post('/register', reg);
// router.post("/register", createAccountLimiter, registrationUser, reg);
router.post('/login', loginUser, login);
router.post('/logout', guard, logout);

module.exports = router;
