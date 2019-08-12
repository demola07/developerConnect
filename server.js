const express = require("express");
const connectDB = require("./config/db");

//Route Paths
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();
const PORT = process.env.PORT || 5000;

//Initialze express bodyparser middleware
app.use(express.json({ extended: false }));

//Connect Database
connectDB();

//test route
app.get("/", (req, res) => res.send("API Running"));

//Define routes and mount them on respective paths
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

app.listen(PORT, () => console.log(`Server Started on ${PORT}`));
