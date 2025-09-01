import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },
    account_Type: {
        type: String,
        enum: ["Savings", "Current", "Loan", "Credit"],
        required: true,

    },
    balance: {
        type: Number,
        default: 0.0
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

export const Account = mongoose.model("Account", accountSchema)