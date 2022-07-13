const express = require("express");

const { registerUser, registerView } = require("../controllers/registerController");
const { loginView,loginUser } = require("../controllers/loginController");

const router = express.Router();

// Get views
router.get("/register", registerView);
router.get("/", loginView);
router.get("/login", loginView);

// post into controllers
router.post("/register", registerUser);
router.post("/login",loginUser)

module.exports = router;
