const express = require("express");

const chatControllers = require("../controllers/chats");

const router = express.Router();

router.get("/login", chatControllers.getLogin);

router.post("/login", chatControllers.postLogin);

module.exports = router;
