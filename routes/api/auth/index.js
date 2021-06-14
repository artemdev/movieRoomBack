const express = require('express');
const router = express.Router();

const guard = require("../../../model/helpers/guard");
const { registrationUser, loginUser } = require("./validation");
const { reg, login, logout, verify } = require("../../../controllers/auth");
const { createAccountLimiter } = require("../../../model/helpers/rate-limit");


router.post('/register', reg);
// router.post("/register", createAccountLimiter, registrationUser, reg);
router.post("/login", loginUser, login);
// router.post("/login", login);
router.post("/logout", guard, logout);


router.get("/verify/:token", verify);

module.exports = router;
