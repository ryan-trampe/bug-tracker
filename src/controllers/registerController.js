const path = require("path");
const bcrypt = require("bcryptjs");
const { User, userCreate, userRead } = require("../models/user");

const saltRounds = 10;

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
  userRead(newUser).then((user) => {
    console.log(user);
    if (user) {
      console.log("email exists");
      res.redirect("/login");
    } else {
      // if not, create new document with user information
      console.log("creating user");
      // encrypt password
      bcrypt.genSalt(saltRounds, (err,salt) => {
        bcrypt.hash(newUser.password,salt,(err,hash) => {
          newUser.password = hash;
          console.log("Hashed pass:",newUser.password);
          userCreate(newUser);
        })
      })
      res.redirect("/login");
    }
  });
};

module.exports = {
  registerView,
  registerUser,
};
