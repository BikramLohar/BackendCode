import mongoose from "mongoose";

const loanSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true
    },
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member",
        required: true
    },
    issueDate: {
        type: Date,
        default: Date.now
    },
    returnDate: {
        type: Date
    },
    status: {
        type: String,
        enum: ["Issued", "Returned", "Overdue"],
        default: "Issued"
    }
}, { timestamps: true })

export const Loan = mongoose.model("Loan", loanSchema)