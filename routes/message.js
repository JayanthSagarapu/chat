const path = require("path");

const express = require("express");
// const { use } = require("./login");

const rootDir = require("../util/path");

const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile("message.txt", (err, data) => {
    if (err) {
      console.log(err);
    }

    res.sendFile(path.join(rootDir, "views", "message.html"));
    // res.send(`${data}`);
  });
});

router.post("/", (req, res, next) => {
  fs.writeFile(
    "message.txt",
    ` ${req.body.username} : ${req.body.message}  `,
    { flag: "a" },
    (err) => {
      //flag: a is added to append the msgs instead od getiing replaced
      if (err) {
        console.log(err);
      }
      res.redirect("/");
    }
  );
});

module.exports = router;
