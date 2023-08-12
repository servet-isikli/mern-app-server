const router = require("express").Router();
const User = require("../models/userModel");

router.route("/register").post(async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.json("User registered successfully");
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
});

module.exports = router;
