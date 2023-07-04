const express = require("express");
require("dotenv").config();
const router = require("./routers");
const app = express();
const { connect } = require("./models/connector");

connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(4000);
