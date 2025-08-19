require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 4000;

const dataObj = {
    "employees": [
        {
            "id": 1,
            "name": "Jane Smith",
            "department": "HR"
        },
        {
            "id": 2,
            "name": "Bob Johnson",
            "department": "Engineering"
        }
    ]
}

app.get('/', function (req, res) {
    res.send("Hello World")
})
app.get('/login', function (req, res) {
    res.send("<h1>Enter Your Login Detaisl</h1>");
})

app.get('/about', (req, res) => {
    res.send("it is a about page")
})
app.get('/data', (req, res) => {
    res.json(dataObj)
})

app.get('/github', (req, res) => {
    res.send("This is my github page");
})



app.listen(process.env.PORT, () => {
    console.log("Your Backend Is Running")
})