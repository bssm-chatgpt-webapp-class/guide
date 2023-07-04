const express = require("express");
const router = express.Router();
const { getConnection } = require("../models/connector");
const jwt = require("jsonwebtoken");
const env = require("../config/env");
const bcrypt = require("bcrypt");

router.post("/signin", async function (req, res) {
  const { email, pw } = req.body;
  const [results] = await getConnection().execute(
    `SELECT * FROM user WHERE email=?`,
    [email]
  );

  if (results.length === 0) {
    return res.json("no user");
  }

  if (!bcrypt.compareSync(pw, results[0].pw)) {
    return res.json("wrong password");
  }

  const token = jwt.sign({ id: results[0].id, email }, env.jwtSecret);
  res.json(token);
});

router.post("/signup", async (req, res) => {
  const { email, pw } = req.body;
  const encryptedPw = await bcrypt.hash(pw, 10);
  await getConnection().execute(`INSERT INTO user(email, pw) VALUES(?, ?)`, [
    email,
    encryptedPw,
  ]);
  return res.json("success");
});

module.exports = router;
