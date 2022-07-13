const path = require("path");
const { User, userCreate, userRead } = require("../models/user");
const { userCheck, userEncrypt } = require("../controllers/userCheck");

const loginView = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
};

const loginUser = (req, res) => {
  const { username, passWord } = req.body;
  const userInfo = new User({
    name: username,
    password,
    passWord,
  });
  const dbQuery = userRead(userInfo).then((user) => {
    console.log(user);
  });
};

module.exports = {
  loginView,
  loginUser,
};
