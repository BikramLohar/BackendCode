import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
        required: true
    },
    transaction_type: {
        type: String,
        enum: ["Deposit", "Withdrawl", "Transfer", "Payment"],
        required: true
    },
    amount_type: {
        type: Number,
        required: true
    },
    transaction_date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String
    }
}, { timestamps: true })

export const Transaction = mongoose.model("Transaction", transactionSchema)