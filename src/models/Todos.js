import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
    text: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

export const TodoModel = mongoose.model("Todo", TodoSchema);



