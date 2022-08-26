import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "http://localhost:9000/api/users";

class UserFetchClass {
    Register = createAsyncThunk("auth/Register", 
    async (payload) => {
        const res = await fetch(`${URL}/${register}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: payload.name, email: payload.email,
                password: payload.password, date: payload.date
            })
        });
        if (!res.ok) throw new Error(res.statusText);
        const user = await res.json();
        localStorage.setItem("user", JSON.stringify(user));
        return user;
    });
};

export const AUTH = new UserFetchClass();


