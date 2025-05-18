const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const userFile = path.join(__dirname, "../data/user.json");

router.post("/", (req, res) => {
  const newUser = req.body;

  let users = [];
  try {
    users = JSON.parse(fs.readFileSync(userFile, "utf8"));
  } catch (e) {
    console.log("Creating new user.json");
  }

  // 🔍 เช็คว่า email นี้มีอยู่แล้วไหม
  const exists = users.find(u => u.email === newUser.email);
  if (exists) {
    return res.send("This email has already been used.");
  }

  users.push(newUser);
  fs.writeFileSync(userFile, JSON.stringify(users, null, 2));
  res.send("Register successfully");
});

module.exports = router;
