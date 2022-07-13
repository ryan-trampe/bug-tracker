const path = require("path");
const bcrypt = require("bcryptjs");
const { User, userCreate, userRead } = require("../models/user");
const { userCheck, userEncrypt } = require("../controllers/userCheck");

const saltRounds = 56;

// Sending registration view
const registerView = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/registration.html"));
};

const registerUser = (req, res) => {
  // Create new user from parsed body
  const newUser = new User({
    name: req.body.username,
    password: req.body.password,
  });
  // Check if this user already exists in the database
  const dbQuery = userRead(newUser).then((user) => {
    console.log(user);
    if (user) {
      console.log("email exists");
      res.redirect("/login");
    } else {
      // if not, create new document with user information
      console.log("creating user");
      // encrypt password
      bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
          if (err) console.log("Error Hashing: ", err);
          else newUser.password = hash;
          console.log(hash);
        });
      });
      userCreate(newUser);
      res.redirect("/login");
    }
  });
};

module.exports = {
  registerView,
  registerUser,
};
