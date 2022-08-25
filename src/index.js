import "dotenv/config";
import express from "express";
import helmet from "helmet";
import logger from "morgan";
import { MidError } from "./middleware/ErrorMid.js";
import { UserRt } from "./routes/UserRt.js";
import { TodoRt } from "./routes/TodoRt.js";

(async () => {
    const app = express();
    app.use(helmet());

    // CORS Setup
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods",
                "POST, GET, PUT, PATCH, DELETE");
            return res.status(200).json({ "status message": "OK" });
        }
        next();
    });

    // Middleware
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use(logger("dev"));

    // Routes
    app.use("/api/users", UserRt);
    app.use("/api/todos", TodoRt);

    // Error Handling
    app.use(MidError.errorHandler);
    app.use(MidError.notFound);
    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
        console.log("Press Ctrl + C to exit.");
    })
})();



