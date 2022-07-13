const express = require("express");

const { registerUser, registerView } = require("../controllers/registerController");
const { loginView,loginUser } = require("../controllers/loginController");
const { homeView } = require("../controllers/homeController");

const router = express.Router();

// Get views
router.get("/", loginView);
router.get("/login", loginView);
router.get("/register", registerView);
router.get("/home",homeView);

// post into controllers
router.post("/login",loginUser)
router.post("/register", registerUser);

module.exports = router;
