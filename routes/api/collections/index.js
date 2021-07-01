const express = require('express');
const router = express.Router();
const CollectionsController = require('../../../controllers/collections.js');

router.get('/', CollectionsController.list);
router.get('/:id', CollectionsController.findById);
router.post('/copy/:id', CollectionsController.copy);

module.exports = router;
