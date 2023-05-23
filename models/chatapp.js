const fs = require("fs");
const path = require("path");

module.exports = class Chat {
  constructor(username, message) {
    this.username = username;
    this.message = message;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "chats.json"
    );
    fs.readFile(p, (err, fileContent) => {
      let chats = [];
      if (!err) {
        chats = JSON.parse(fileContent);
      }
      chats.push(this);

      fs.writeFile(p, JSON.stringify(chats), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "chats.json"
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(fileContent);
    });
  }
};
