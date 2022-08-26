import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

export const TodoModel = mongoose.model("Todo", TodoSchema);



