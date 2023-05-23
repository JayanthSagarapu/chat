const rootDir = require("../util/path");

const fs = require("fs");

const path = require("path");

const Chat = require("../models/chatapp");

exports.getLogin = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "login.html"));
};

exports.postLogin = (req, res, next) => {
  res.redirect("/");
};

exports.getMessage = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "message.html"));
};

exports.postMessage = (req, res, next) => {
  const chat = new Chat(req.body.username, req.body.message);
  chat.save();
  res.redirect("/chatt");
};

exports.getChatMessage = (req, res, next) => {
  Chat.fetchAll((chats) => {
    res.send(`${chats}`);
  });
};

exports.postChatMessage = (req, res, next) => {
  res.redirect("/");
};

exports.getContactus = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
};

exports.postContactus = (req, res, next) => {
  res.redirect("/success");
};

exports.getSuccess = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
};
