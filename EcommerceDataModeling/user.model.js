import mongoose from "mongoose";

const userScehma = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        lowerCase: true
    },
    email: {
        type: String,
        required: true,
        lowerCase: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }

}, { timestamps: true })

export const User = mongoose.model("User", userScehma);