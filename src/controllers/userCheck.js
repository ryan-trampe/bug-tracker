const path = require("path");
const bcrypt = require("bcryptjs");
const { User, userCreate, userRead } = require("../models/user");
const saltRounds = 10;

// Function to check if input user matches queried information
const userCheck = (inputUser, queriedUser) => {
  return bcrypt.compare(inputUser.password, queriedUser.password);
};

/***
 * Function to encrypt user password
 * pass in a user model
 */
const userEncrypt = (user) => {
  bcrypt.genSalt(saltRounds, function (err, salt) {
    return bcrypt.hash(user.password, salt);
  });
};

module.exports = {
  userCheck,
  userEncrypt,
};
