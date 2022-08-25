import Joi from "joi";

export const userVal = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(50).required().email(),
    password: Joi.string().min(6).max(30).required()
});

export const todoVal = Joi.object({
    text: Joi.string().required()
});




