const express = require("express");
const cool = require("cool-ascii-faces");
const app = express();
const PORT = process.env.PORT || 16078;

app.use("/",express.static(__dirname));

app.get("/hello", (req, res)=>{
    res.send("Welcome to the server!")});

app.get("/cool", (req, res)=>{
    res.send(cool())});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT} `+cool())});

console.log(`finished setup`);