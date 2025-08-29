import express from "express"
import mongoose from "mongoose"
import cors from "cors"

import { Book } from "../book.model"
import { Member } from "../member.model"
import { Loan } from "../loan.model"

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/libraryDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB is Connected"))
    .catch(err => console.error(err))

app.post("/books", async (req, res) => {
    const book = new Book(req.body)
    await book.save();
    res.json(book)
})

app.get("/books", async (req, res) => {
    const books = await Book.find();
    res.json(books)
})

app.post("/members", async (req, res) => {
    const member = new Member(req.body)
    await member.save();
    res.json(member)
})

app.get("/members", async (req, res) => {
    const members = await Member.find()
    res.json(members)
})

app.post("/loans", async (req, res) => {
    const loans = new Loan(req.body)
    await loans.save();
    await Book.findByIdAndUpdate(req.body.book, { availabel: false })

    res.json(loans)
})

app.get("/loans", async (req, res) => {
    const members = await Member.find()
    res.json(members)
})
app.put('/loans/:id/return', async (req, res) => {
    const loan = await Loan.findByIdAndUpdate(
        req.params.id,
        {
            status: "Returned",
            returnDate: new Date()
        },
        {
            new: true
        }

    );
    await Book.findByIdAndUpdate(loan.book, { availabel: true })
    res.json(loan)
})

app.listen(5000, () => console.log("🚀 Server running at http://localhost:5000"))