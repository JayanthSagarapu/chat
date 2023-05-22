const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorControllers = require("./controllers/error");

const chatapp = express();

const loginRoutes = require("./routes/login");
const msgRoutes = require("./routes/message");
const contactRoutes = require("./routes/contactus");
const successRoutes = require("./routes/success");

chatapp.use(bodyParser.urlencoded({ extended: false }));

chatapp.use(express.static(path.join(__dirname, "public")));

chatapp.use(loginRoutes);
chatapp.use(msgRoutes);
chatapp.use(contactRoutes);
chatapp.use(successRoutes);

chatapp.use(errorControllers.get404);

chatapp.listen(3000);
