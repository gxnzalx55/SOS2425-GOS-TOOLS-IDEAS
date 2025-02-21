const express = require("express");
const app = express();
const PORT = 16078;
const cool = require("cool-ascii-faces");

app.use("/",express.static("./public"));

app.get("/hello", (req, res)=>{res.send("Welcome to the server!")});
app.get("/cool", (req, res)=>{res.send(cool())});

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT} `+cool())});

console.log(`finished setup`);