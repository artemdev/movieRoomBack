const express = require('express');
const router = express.Router();
const {
  currentUser,
  avatars,
  sendEmail,
  verifyToken,
  all,
} = require('../../../controllers/users.js');
const guard = require('../../../model/helpers/guard');
const upload = require('../../../model/helpers/upload');

const { validateUploadAvatar } = require('./validation');
router.get('/current', guard, currentUser);
router.post('/sendEmail', sendEmail);
router.patch(
  '/avatars',
  [guard, upload.single('avatar'), validateUploadAvatar],
  avatars,
);
router.get('/verify/:token', verifyToken);

router.get('/', all);

module.exports = router;
