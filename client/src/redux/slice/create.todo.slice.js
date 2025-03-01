import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addTodoApi } from "../../api/addTodo";

export const addTodo = createAsyncThunk("addTodo", async (payload) => {
    const response = await addTodoApi(payload);
    return response.data; 
});


const todoSlice = createSlice({
    name: "createTodo",
    initialState: {
        isLoading: false,
        data: [],
        error: null,
        success : false
    },
    extraReducers: (builder) => {
        builder.addCase(addTodo.pending, (state) => {
            state.isLoading = true;
            state.success = false;
        });
        builder.addCase(addTodo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
            state.success = true;
        });
        builder.addCase(addTodo.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            state.success = false;
        });
    }
});

export const createTodo = todoSlice.reducer;
