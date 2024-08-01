import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { getTodoByIdApi } from "../../api/getTodoById";

export const getTodo = createAsyncThunk("getTodo", async (_id) => {
    const response = await getTodoByIdApi(_id);
    return response.data; 
});


const todoSlice = createSlice({
    name : "singletodo",
    initialState : {
        isLoading : false,
        data : null,
        error : false
    },
    extraReducers: (builder) => {
        builder.addCase(getTodo.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getTodo.fulfilled, (state , action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(getTodo.rejected, (state, action) => {
            state.error = true;
            console.log("error while fetching todos");
        })
    }
});

export const getTodoById = todoSlice.reducer;