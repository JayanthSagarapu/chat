const express = require("express");
const { use } = require("./login");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile("message.txt", (err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(
      `${data}<form onsubmit="document.getElementById('username').value = localStorage.getItem('username')" action="/" method="POST"><input type="text" placeholder="msg" name="message" id="message"><input type="hidden" id="username" name="username"><button type="submit">Send</button></form>`
    );
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
