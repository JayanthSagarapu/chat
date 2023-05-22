const express = require("express");

const chatControllers = require("../controllers/chats");

const router = express.Router();

router.get("/store", chatControllers.getStored);

// router.post("/store", chatControllers.postStored);

module.exports = router;
