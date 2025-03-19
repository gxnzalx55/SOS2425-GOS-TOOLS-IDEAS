const express = require("express");
const app = express();
const PORT = process.env.PORT || 16078;
const BASE_API = "/api/v1";

app.use("/",express.static("./public"));
app.use(express.json());

let contacts = [
    {
        name: "John", 
        phone: "1234567890"},
    {
        name: "Jane", 
        phone: "0987654321"}
    ];

app.get(BASE_API+"/contacts", (req, res)=>{
    console.log("new GET to /contacts");
    res.send(JSON.stringify(contacts,null,2));
});

app.get(BASE_API+"/contacts", (req, res)=>{
    console.log("new POST to /contacts");
    let newContact = req.body;
    contacts.push(newContact);
    res.sendStatus(201);
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT} `);
});