import express from "express";
import { TODO } from "../controllers/TodoCon.js";

export const TodoRt = express.Router();
    TodoRt.post("/", TODO.Create);
    TodoRt.get("/", TODO.FetchAll);
    TodoRt.get("/:id", TODO.GetOne);
    TodoRt.put("/:id", TODO.Update);
    TodoRt.delete("/:id", TODO.Delete);



    