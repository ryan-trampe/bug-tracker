const express = require("express")

const{
    registerUser,
    registerView
} = require("../controllers/registerController");

const router = express.Router();

// Get views
router.get("/register",registerView);
router.get("/",registerView);

// post into controllers
router.post("/register",registerUser);

module.exports = router;