import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { addTodoApi } from "../../api/addTodo";

export const addTodo = createAsyncThunk("addTodo", async (payload) => {
    const response = await addTodoApi(payload);
    return response;
});

const todoSlice = createSlice({
    name : "todo",
    initialState : {
        isLoading : false,
        data : null,
        error : false
    },
    extraReducers: (builder) => {
        builder.addCase(addTodo.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(addTodo.fulfilled, (state , action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(addTodo.rejected, (state, action) => {
            state.error = true;
            console.log("error while fetching todos");
        })
    }
});

export const createTodo = todoSlice.reducer;