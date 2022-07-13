const path = require("path");
const bcrypt = require('bcryptjs');
const { User, userCreate, userRead } = require("../models/user");

const loginView = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
};

const loginUser = (req, res) => {
  const userInfo = new User({
    name: req.body.username,
    password: req.body.password
  });
  userRead(userInfo).then((user) => {
    console.log(user);
    if (user) {
      bcrypt.compare(userInfo.password,user.password).then((result) => {
        console.log("Login succesful");
        res.redirect("/home");
      })
    } else {
      console.log("User does not exist");
      res.redirect("/login");
    }
  });
};

module.exports = {
  loginView,
  loginUser,
};
