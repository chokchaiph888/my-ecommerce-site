// backend/routes/login.js
const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const userFile = path.join(__dirname, "../data/user.json");

router.post("/", (req, res) => {
  const { email, password } = req.body;
  const users = JSON.parse(fs.readFileSync(userFile, "utf8"));

  const user = users.find(u => u.email === email);

  if (!user) return res.send("Incorrected Username");
  if (user.password !== password) return res.send("Incorrected Password.");
  res.send("Login successfully");
});

module.exports = router;
