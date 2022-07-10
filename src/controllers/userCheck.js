const path = require('path');
const {User, userCreate, userRead} = require('../models/user');

// Function to check if a user is in the database
const userCheck = (user) => {
    userRead(user);
}