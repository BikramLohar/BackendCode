import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    membership: {
        type: Date,
        default: Date.now

    }

}, { timestamps: true })

export const Member = mongoose.model("Member", memberSchema);



























