// server
const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// dotenv
require("dotenv").config();

//mongoose connection
const mongoose = require("mongoose");

const URL = process.env.CONNECTDB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//listening
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
