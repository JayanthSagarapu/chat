const fs = require("fs");

const path = require("path");

const rootDir = require("../util/path");
const express = require("express");

module.exports = class Chat {
  constructor(username, message) {
    this.username = username;
    this.message = message;
  }

  save() {
    const p = path.join(rootDir, "data", "chats.json");

    fs.readFile(p, (err, fileContent) => {
      let chats = [];
      if (err) {
        console.log(err);
      }
      chats.push(this);
      fs.writeFile(
        p,
        `${this.username} : ${this.message}`,
        { flag: "a" },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  static fetchAll(cb) {
    const p = path.join(rootDir, "data", "chats.json");
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
