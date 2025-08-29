import express from 'express';
const app = express();

const PORT = process.env.PORT || 4000;

// app.get('/', (req, res) => {
//     res.send("Server is ready")
// })


 app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: "This is a joke"
        },
        {
            id: 2,
            title: 'Another Joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'A Third Joke',
            content: 'This is a third joke'
        },
        {
            id: 4,
            title: "A fourth Joke",
            content: "This is a fourth joke"
        },
        {
            id: 5,
            title: "A fifth joke",
            content: "This is a fifth joke"
        }
    ]
    res.send(jokes)
})



app.listen(PORT, () => {
    console.log(`serve at http:/localhost:${PORT}`)
})

