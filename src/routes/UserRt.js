import express from "express";
import { USER } from "../controllers/UserCon.js";
import { protect } from "../middleware/AuthMid.js";

export const UserRt = express.Router();
    UserRt.post("/register", USER.Register);
    UserRt.post("/login", USER.Login);
    UserRt.get("/me", protect, USER.Profile);


