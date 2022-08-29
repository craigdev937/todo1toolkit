import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "http://localhost:9000/api/todos";
class TodoFetchClass {
    Create = createAsyncThunk("todo/Create", 
    async (payload) => {
        const res = await fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: payload.title, 
                description: payload.description
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const todo = await res.json();
        return todo;
    });

    FetchAll = createAsyncThunk("todo/FetchAll", 
    async () => {
        const res = await fetch(URL);
        if (!res.ok) throw new Error(res.statusText);
        const todo = await res.json();
        return [...todo];
    });

    GetOne = createAsyncThunk("todo/GetOne", 
    async (_id) => {
        const res = await fetch(`${URL}/${_id}`);
        if (!res.ok) throw new Error(res.statusText);
        const todo = await res.json();
        return todo;
    });

    Update = createAsyncThunk("todo/Update", 
    async (payload) => {
        const res = await res.json(`${URL}/${payload._id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: payload.title, 
                description: payload.description
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const todo = await res.json();
        return todo;
    });

    Delete = createAsyncThunk("todo/Delete", 
    async (_id) => {
        const res = await fetch(`${URL}/${_id}`, {
            method: "DELETE"
        });
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    });
};

export const TODO = new TodoFetchClass();


