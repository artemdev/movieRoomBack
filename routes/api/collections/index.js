const express = require('express');
const router = express.Router();
const ContactsController = require('../../../controllers/collections.js');
router.get('/', ContactsController.list);
router.post('/copy/:id', ContactsController.copy);

module.exports = router;
