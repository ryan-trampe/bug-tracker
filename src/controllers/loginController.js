const path = require("path");
const { User, userCreate, userRead } = require("../models/user");

const loginView = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
};

module.exports = {
  loginView,
};
