const express = require("express");

const chatControllers = require("../controllers/chats");

const router = express.Router();

router.get("/contactus", chatControllers.getContactus);

router.post("/products", chatControllers.postContactus);

// router.post("/success", (req, res, next) => {
//   res.sendFile(path.join(rootDir, "views", "success.html"));
// });

module.exports = router;
