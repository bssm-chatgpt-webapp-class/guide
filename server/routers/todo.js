const express = require("express");
const router = express.Router();
const { getConnection } = require("../models/connector");
const { validateToken } = require("../middlewares/auth");

router.get("/", async function (req, res) {
  const [results] = await getConnection().execute(`SELECT * FROM todo`);
  res.json(results);
});

router.post("/", validateToken, async (req, res) => {
  const data = req.body;

  await getConnection().execute(
    `INSERT INTO todo(todo, completed, authorId) VALUES(?, ?, ?)`,
    [data.todo, 0, req.user.id]
  );
  return res.json("success");
});

router.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { todo, completed } = req.body;
  await getConnection().execute(
    `UPDATE todo SET todo=?, completed=? WHERE id=?`,
    [todo, completed, id]
  );
  return res.json("success");
});

router.delete("/:id", validateToken, async (req, res) => {
  const id = req.params.id;
  const [results] = await getConnection().execute(
    `SELECT * FROM todo WHERE id=?`,
    [id]
  );
  if (results.length === 0) {
    return res.status(400).json("no todo");
  }
  if (results[0].authorId !== req.user.id) {
    return res.status(401).json("no auth");
  }
  await getConnection().execute(`DELETE FROM todo WHERE id=?`, [id]);
  return res.json("success");
});

module.exports = router;
