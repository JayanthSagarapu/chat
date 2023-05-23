const express = require("express");

const chatControllers = require("../controllers/chats");

const router = express.Router();

router.get("/chatt", chatControllers.getChatMessage);

router.post("/chatt", chatControllers.postChatMessage);

module.exports = router;
