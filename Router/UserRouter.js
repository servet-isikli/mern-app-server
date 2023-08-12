const route = require("express").Router();

router.post("/register", async (req, res) => {
  console.log(req.body);
});
