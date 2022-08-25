import express from "express";
import { TodoIndex } from "../controllers/TodoCon.js";

export const TodoRt = express.Router();
    TodoRt.get("/", TodoIndex);


