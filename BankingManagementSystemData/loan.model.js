import mongoose from "mongoose";
const loanSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },
    loan_type: {
        type: String,
        enum: ["Home", "Car", "Personal", "Educational"],
        required: true
    },
    loan_amount: {
        type: Number,
        required: true
    },
    interest_rate: {
        type: Number,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["Active", "Closed"],
        default: "Active"
    }
}, { timestamps: true })
export const Loan = mongoose.model("Loan", loanSchema)