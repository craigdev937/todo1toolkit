import { createSlice } from "@reduxjs/toolkit";
import { AUTH } from "./AuthAPI";

//Get user from LocalStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: user ? user : null,
    loading: false,
    error: null 
};

const AuthSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.loading = false,
            state.error = null
        },
    },
    extraReducers: {
        [AUTH.Register.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [AUTH.Register.pending]: (state) => {
            state.loading = true
        },
        [AUTH.Register.fulfilled]: (state, action) => {
            state.loading = false,
            state.user = action.payload
        },
        [AUTH.Login.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [AUTH.Login.pending]: (state) => {
            state.loading = true
        },
        [AUTH.Login.fulfilled]: (state, action) => {
            state.loading = false,
            state.user = action.payload
        },
        [AUTH.Logout.fulfilled]: (state) => {
            state.user = null
        },
    }
});

export const { reset } = AuthSlice.actions;
export const AuthReducer = AuthSlice.reducer;


