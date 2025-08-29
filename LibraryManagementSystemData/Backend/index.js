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

