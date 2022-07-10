const path = require("path");
const { User, userCreate, userRead } = require("../models/user");

// Sending registration view
const registerView = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/registration.html"));
};

const registerUser = (req, res) => {
  const { username, password } = req.body;
  // Create new user from parsed body
  const newUser = new User({
    name: username,
    password: password,
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
      userCreate(newUser);
      res.redirect("/login");
    }
  });
};

module.exports = {
  registerView,
  registerUser,
};
