const express = require("express");
const app = express();

const database = [{ id: 1, text: "할 일1" }];
let currentId = 2;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/todo", function (req, res) {
  res.json(database);
});

app.post("/todo", (req, res) => {
  const data = req.body;
  database.push({ id: currentId++, text: data.text });
  return res.json("success");
});

app.listen(4000);
