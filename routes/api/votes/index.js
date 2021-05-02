const express = require('express');
const router = express.Router();
const { create, list, mockup } = require('../../../controllers/votes.js');

router.post('/', create);
router.get('/get', list);
router.get('/', mockup);
module.exports = router;
