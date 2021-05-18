const express = require("express");
const router = express.Router();
const { create, findRoom } = require("../../../controllers/rooms.js");

router.post("/", create);
router.get("/:roomId", findRoom);

module.exports = router;
