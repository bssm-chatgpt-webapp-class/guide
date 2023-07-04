const express = require("express");
const router = express.Router();
const { getConnection } = require("../models/connector");
const jwt = require("jsonwebtoken");

router.post("/signin", async function (req, res) {
  const { email, pw } = req.body;
  const [results] = await getConnection().execute(
    `SELECT * FROM user WHERE email=? and pw=?`,
    [email, pw]
  );

  if (results.length === 0) {
    return res.json("no user");
  }

  const token = jwt.sign({ email }, "secret");
  res.json(token);
});

router.post("/signup", async (req, res) => {
  const { email, pw } = req.body;
  await getConnection().execute(`INSERT INTO user(email, pw) VALUES(?, ?)`, [
    email,
    pw,
  ]);
  return res.json("success");
});

module.exports = router;
