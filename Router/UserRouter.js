const router = require("express").Router();
let user = require("../Model/UserModel");

router.post("/register", async (req, res) => {
  console.log(req.body);

  const { name, email, password } = req.body;
  try {
    const NewUser = new user({
      name,
      email,
      password,
    });
    const savedUser = await NewUser.save();
    return res.json("Basariyla kaydedildi");
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
