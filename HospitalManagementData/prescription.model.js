import mongoose from "mongoose";

const perscriptionSchema = new mongoose.Schema({
    medicineName: {
        type: String,
        dosage: String,
        duration: String,//
        required: true
    }
}, { timestamps: true })

export const Prescription = mongoose.model("Prescription", perscriptionSchema)