import mongoose from "mongoose";

const billSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    },
    treatmentCost: {
        type: Number,
        required: true
    },
    roomCost: { type: Number },
    medicineCost: Number,
    totalAmount: Number,
    paymentStatus: {
        type: String,
        enum: ["Pending", "Paid"],
        default: "Pending"
    }
}, { timestamps: true })

export const Bill = mongoose.model("Bill", billSchema)