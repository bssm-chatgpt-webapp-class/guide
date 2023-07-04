const express = require("express");
const router = express.Router();
const { getConnection } = require("../models/connector");

let database = [{ id: 1, text: "할 일1" }];
let currentId = 2;

router.get("/", async function (req, res) {
  const [results] = await getConnection().execute(`SELECT * FROM todo`);
  res.json(results);
});

router.post("/", (req, res) => {
  const data = req.body;
  database.push({ id: currentId++, text: data.text });
  return res.json("success");
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const updateIndex = database.findIndex((data) => data.id === id);
  database[updateIndex].text = req.body.text;
  return res.json("success");
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  database = database.filter((data) => data.id !== Number(id));
  return res.json("success");
});

module.exports = router;
