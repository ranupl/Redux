import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { deleteTodoApi } from "../../api/deleteTodo";

export const deleteTodos = createAsyncThunk("deleteTodos", async (_id) => {
    const response = await deleteTodoApi(_id);
    return response.data; 
});


const todoSlice = createSlice({
    name : "deletetodo",
    initialState : {
        isLoading : false,
        data : null,
        error : false
    },
    extraReducers: (builder) => {
        builder.addCase(deleteTodos.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(deleteTodos.fulfilled, (state , action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(deleteTodos.rejected, (state, action) => {
            state.error = true;
            console.log("error while fetching todos");
        })
    }
});

export const deleteTodo = todoSlice.reducer;