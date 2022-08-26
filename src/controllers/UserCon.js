import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/Users.js";
import { userVal } from "../validation/Validate.js";

const generateToken = (id) => {
    return jwt.sign({ id },
        process.env.JWT_SECRET, 
        { expiresIn: "20d" });
};

class UserClass {
    Register = async (req, res, next) => {
        const { name, email, password } = req.body;
        try {
            const { error } = userVal.validate(req.body);
            if (error) return res.status(400)
                .send(error.details[0].message);
            const checkExist = await UserModel.findOne({ email });
            if (checkExist) {
                res.status(400).json({
                    msg: "Email already exists!"
                });
            };
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(password, salt);
            const user = await UserModel.create({
                name, email, password: hashedPass
            });
            if (user) {
                res.status(202).json({
                    _id: user.id,
                    name: user.name,
                    email: user.email,
                    token: generateToken(user._id)
                });
            };
        } catch (error) {
            res.status(400).json({msg: "User failed to Create"});
            next(error);
        }
    };

    Login = async (req, res, next) => {
        const { email, password } = req.body;
        try {
            const user = await UserModel.findOne({ email });
            if (user && (await bcrypt.compare(
                    password, user.password))) {
                res.status(200).json({
                    _id: user.id,
                    name: user.name,
                    email: user.email,
                    token: generateToken(user._id)
                })
            }; 
        } catch (error) {
            res.status(400).json({msg: "Wrong Credentials!"});
            next(error);
        }
    };

    Profile = async (req, res, next) => {
        try {
            res.status(200).json(req.user);
        } catch (error) {
            res.status(400).json({msg: "Wrong User!"});
            next(error);
        }
    };
};

export const USER = new UserClass();



