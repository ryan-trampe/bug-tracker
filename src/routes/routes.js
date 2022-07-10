const express = require("express");

const { registerUser, registerView } = require("../controllers/registerController");
const { loginView } = require("../controllers/loginController");

const router = express.Router();

// Get views
router.get("/register", registerView);
router.get("/", registerView);
router.get("/login", loginView);

// post into controllers
router.post("/register", registerUser);

module.exports = router;
