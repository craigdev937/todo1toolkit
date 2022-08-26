import jwt from "jsonwebtoken";
import { UserModel } from "../models/Users.js";

export const protect = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization && 
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // Get token from the Header.
            token = req.headers.authorization.split(" ")[1];
            // Verify the Token.
            const decoded = jwt.verify(
                token, 
                process.env.JWT_SECRET
            );
            // Get User from the Token.
            req.user = await UserModel
                .findById(decoded.id)
                .select("-password");
            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error("Not Authorized!");
        }
    };
    if (!token) res.status(401).json("Token False");
};



