const express = require("express");
const app = express();
const connectDB = require("./config/db");

//Connect Database
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("API Running"));

app.listen(PORT, () => console.log(`Server Started on ${PORT}`));
