const express = require("express");

const chatControllers = require("../controllers/chats");

const router = express.Router();

router.get("/success", chatControllers.getSuccess);

module.exports = router;
