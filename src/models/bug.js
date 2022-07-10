const mongoose = require("mongoose");

const BugSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    userSent: {
        type: String,

    }
})