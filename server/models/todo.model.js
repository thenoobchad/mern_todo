import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:[true, "Todo must have userid"],
    },
    title: {
        type: String,
        required: [true, "Must provide an title."],
    },
    isCompleted: {
        type: Boolean,
        default: false,
    }
})

export const Todo = mongoose.model("Todo", todoSchema)