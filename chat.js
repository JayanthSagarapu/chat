const express = require("express");
const bodyParser = require("body-parser");

const chatapp = express();

const loginRoutes = require("./routes/login");
const msgRoutes = require("./routes/message");

chatapp.use(bodyParser.urlencoded({ extended: false }));

chatapp.use(loginRoutes);
chatapp.use(msgRoutes);

chatapp.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

chatapp.listen(3000);
