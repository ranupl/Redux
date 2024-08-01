import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updateTodoApi } from "../../api/updateTodo";

export const editTodo = createAsyncThunk("editTodo", async ({_id, formdata}) => {
    const response = await updateTodoApi(_id, formdata);
    return response.data; 
});


const todoSlice = createSlice({
    name: "updatedtodo",
    initialState: {
        isLoading: false,
        data: [],
        error: null,
        success : false
    },
    extraReducers: (builder) => {
        builder.addCase(editTodo.pending, (state) => {
            state.isLoading = true;
            state.success = false;
        });
        builder.addCase(editTodo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
            state.success = true;
        });
        builder.addCase(editTodo.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            state.success = false;
        });
    }
});

export const updateTodo = todoSlice.reducer;
