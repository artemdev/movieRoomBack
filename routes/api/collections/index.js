const express = require('express');
const router = express.Router();
const ContactsController = require('../../../controllers/collections.js');
// const guard = require('../../../model/helpers/guard');

router.get('/', ContactsController.list);
router.post('/copy/:id', ContactsController.copy);

module.exports = router;
