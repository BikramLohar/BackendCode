import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
        required: true
    },
    card_number: {
        type: String,
        unique: true,
        required: true
    },
    card_type: {
        type: String,
        enum: ["Debit", "Credit"],
        required: true
    },
    expiry_date: {
        type: Date,
        required: true
    },
    cvv: {
        required: true,
        type: String
    }
}, { timestamps: true })

export const Card = mongoose.model("Card", cardSchema)