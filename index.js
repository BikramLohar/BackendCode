require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', function (req, res) {
    res.send("Hello World")
})
app.get('/login', function (req, res) {
    res.send("<h1>Enter Your Login Detaisl</h1>");
})

app.get('/about', (req, res) => {
    res.send("it is a about page")
})

app.get('/github', (req, res) => {
    res.send("This is my github page");
})



app.listen(process.env.PORT, () => {
    console.log("Your Backend Is Running")
})