import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

export const Customer = mongoose.model("Customer", customerSchema)