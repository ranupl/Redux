import { configureStore } from "@reduxjs/toolkit";
import { getTodo } from "./slice/get.todo.slice"
import { createTodo } from "./slice/create.todo.slice";
import { deleteTodo } from "./slice/delete.todo.slice";
import { getTodoById } from "./slice/get.by.id.todo.slice";
import { updateTodo } from "./slice/update.todo.slice";

export const store = configureStore({
    reducer : {
        todo : getTodo,
        addtodo : createTodo,
        deleteTodo : deleteTodo,
        getTodoById : getTodoById,
        updateTodo :updateTodo
    },
    devTools : true
})