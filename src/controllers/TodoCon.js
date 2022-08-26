import { TodoModel } from "../models/Todos.js";
import { todoVal } from "../validation/Validate.js";

class TodoClass {
    Create = async (req, res, next) => {
        try {
            const { error } = todoVal.validate(req.body);
            if (error) return res.status(400)
                .send(error.details[0].message);
            const todo = new TodoModel({
                title: req.body.title,
                description: req.body.description
            });
            await todo.save();
            return res.status(200).json(todo);
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    FetchAll = async (req, res, next) => {
        try {
            await TodoModel.find()
            .then((todos) => res.status(200)
            .json(todos));
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    Update = async (req, res, next) => {
        try {
            const { error } = todoVal.validate(req.body);
            if (error) return res.status(400)
                .send(error.details[0].message);
            const { id } = req.params;
            const { title, description } = req.body;
            await TodoModel.findByIdAndUpdate(id, {
                title, description
            })
            .then(() => res.status(200)
            .json("The Todo was Updated!"));
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    Delete = async (req, res, next) => {
        try {
            await TodoModel.findByIdAndDelete(req.params.id)
            .then(() => res.status(200)
            .json("The Todo was Deleted!"));
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };
};

export const TODO = new TodoClass();




