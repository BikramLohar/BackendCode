import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    //here 1st obj define which data fields we are taking
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowerCase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowerCase: true,

        },
        password: {
            type: String,
            required: [true, "Password is required"]
        }

    },

    //and the 2nd field is for timestamps
    {
        timestamps: true
    })

export const User = mongoose.model("User", userSchema);

