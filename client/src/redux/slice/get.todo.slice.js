import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { getTodoApi } from "../../api/getTodo";

export const fetchTodos = createAsyncThunk("fetchTodos", async (payload) => {
    const response = await getTodoApi(payload);
    return response.data; 
});


const todoSlice = createSlice({
    name : "todo",
    initialState : {
        isLoading : false,
        data : null,
        error : false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTodos.fulfilled, (state , action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.error = true;
            console.log("error while fetching todos");
        })
    }
});

export const getTodo = todoSlice.reducer;