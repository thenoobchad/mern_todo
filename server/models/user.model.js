import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Must provide an email."],
        unique:[true, "Email must be unique."]
    },
    passowrd: {
        type: String,
        required: [true, "Must provide password."]
    }
})

export const User = mongoose.model("User", userSchema)