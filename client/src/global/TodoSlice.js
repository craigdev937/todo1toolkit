import { createSlice } from "@reduxjs/toolkit";
import { TODO } from "./TodoAPI";

const initialState = {
    todos: [],
    loading: false,
    error: null
};

const TodoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: {
        [TODO.FetchAll.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [TODO.FetchAll.pending]: (state) => {
            state.loading = true
        },
        [TODO.FetchAll.fulfilled]: (state, action) => {
            state.loading = false,
            state.todos = action.payload
        },
        [TODO.Create.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [TODO.Create.pending]: (state) => {
            state.loading = true
        },
        [TODO.Create.fulfilled]: (state, action) => {
            state.loading = false,
            state.todos = action.payload
        },
        [TODO.Update.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [TODO.Update.pending]: (state) => {
            state.loading = true
        },
        [TODO.Update.fulfilled]: (state, action) => {
            state.loading = false;
            const index = state.todos.findIndex(
                (todo) => todo._id === action.payload._id);
            state.todos[index] = {
                ...state.todos[index],
                ...action.payload
            };
        },
        [TODO.Delete.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [TODO.Delete.pending]: (state) => {
            state.loading = true
        },
        [TODO.Delete.fulfilled]: (state, action) => {
            state.loading = false;
            return state.todos.filter(
                (todo) => todo._id !== action.payload._id);
        },
    }
});

export const { reset } = TodoSlice.actions;
export const TodoReducer = TodoSlice.reducer;


