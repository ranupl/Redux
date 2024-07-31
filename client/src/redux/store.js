import { configureStore } from "@reduxjs/toolkit";
import { getTodo } from "./slice/get.todo.slice"
import { createTodo } from "./slice/create.todo.slice";

export const store = configureStore({
    reducer : {
        todo : getTodo,
        addtodo : createTodo
    }
})