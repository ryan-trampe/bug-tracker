const path = require("path");
const { User, userCreate, userRead } = require("../models/user");

const loginView = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
};

const loginUser = (req,res) => {
  const { username,password } = req.body;
  const userInfo = new User({
    name: username,
    password, password,
  });
  const dbQuery = userRead(userInfo).then((user) => {
    console.log(user);
  });
};

module.exports = {
  loginView,
  loginUser
};
