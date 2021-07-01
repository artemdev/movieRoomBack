
const express = require('express');
const router = express.Router();

const RoomsController = require('../../../controllers/rooms.js');

router.get('/', RoomsController.list);
router.post('/', RoomsController.create);

module.exports = router;
