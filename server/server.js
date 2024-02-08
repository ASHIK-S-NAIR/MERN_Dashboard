const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;

app.use(cors());

//DB connection
mongoose.connect(process.env.DATABASE, {}).then(() => {
  console.log("DB connected");
});

app.get("/", (req, res) => {
  res.json({ msg: "Sever is good and running" });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
