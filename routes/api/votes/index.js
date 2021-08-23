const express = require('express');
const router = express.Router();
const guard = require('../../../model/helpers/guard');
const { create, list, mockup } = require('../../../controllers/votes.js');

router.post('/', guard, create);
router.get('/', guard, list);
// router.get('/', mockup);
module.exports = router;
