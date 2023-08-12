// server
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const userRouter = require("./Router/UserRouter");

app.use(cors());
app.use(express.json());
const app = express();
const PORT = process.env.PORT || 5000;

// mongoose connection

const URL = process.env.CONNECTDB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
