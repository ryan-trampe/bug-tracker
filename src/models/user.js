const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

const userCreate = (newUser) => {
  newUser.save().catch((err) => console.log(err));
};

const userRead = async (user) => {
  const result = await User.findOne({ name: user.name });
  return result;
};

module.exports = {
  User,
  userCreate,
  userRead,
};
