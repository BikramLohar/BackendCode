import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        unique: true,
        required: true
    },
    category: {
        type: String
    },
    availabel:{
       type:Boolean,
        default:true

    }
}, { timestamps: true })

export const Book = mongoose.model("Book", bookSchema);