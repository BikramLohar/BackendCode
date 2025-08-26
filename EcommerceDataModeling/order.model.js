import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderName: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const Order = mongoose.model("Order", orderSchema)