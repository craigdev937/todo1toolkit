import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./AuthSlice";
import { TodoReducer } from "./TodoSlice";

export const RootReducer = configureStore({
    reducer: {
        auth: AuthReducer,
        todos: TodoReducer,
    },
});


