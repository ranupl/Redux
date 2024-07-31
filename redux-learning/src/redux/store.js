import { configureStore } from "@reduxjs/toolkit";
import { getTodo } from "./slice/get.todo.slice"

export const store = configureStore({
    reducer : {
        todo : getTodo
    }
})

