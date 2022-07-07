"use strict";

// load environment variables
try {
  require("dotenv").config();
  console.log("Environment set");
} catch (err) {
  console.log("Failed to read .env ... trying to use config defaults");
}

// packages
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const https = require("https");
const http = require("http");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.NODE_PORT || 8080;
const HOST = process.env.NODE_HOST || "0.0.0.0";

// configure mongodb connection
const dbURI = process.env.MONGOLAB_URI;
mongoose
  .connect(dbURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("database connected"))
  .catch((err) => console.log("DB error:" + err));

// app.use("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "views/login.html"));
// });

app.use("/",require("./routes/routes"));

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, HOST);
