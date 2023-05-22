const express = require("express");

const chatControllers = require("../controllers/chats");

const router = express.Router();

router.get("/", chatControllers.getMessage);

router.post("/", chatControllers.postMessage);

module.exports = router;
