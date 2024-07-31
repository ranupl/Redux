import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { addTodoApi } from "../../api/addTodo";

// export const addTodo = createAsyncThunk("addTodo", async (payload) => {
//     console.log(payload, "payload in slice")
//     const response = await addTodoApi({payload});
//     console.log(response)
//     return response.data; 
// });

export const addTodo = createAsyncThunk("addTodo", async(payload) => {
    return fetch("http://localhost:3004/api/todos/addTodo" , { method : "POST", 
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({
            title: payload.title,
            description: payload.description,
            status: payload.status,
            priority: payload.priority
        }).then((res)=> res.json())
    })
})

const todoSlice = createSlice({
    name: "createTodo",
    initialState: {
        isLoading: false,
        data: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(addTodo.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(addTodo.fulfilled, (state, action) => {
            state.isLoading = false;
            // state.data = action.payload;
            state.push(action.payload);
        });
        builder.addCase(addTodo.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
});

export const createTodo = todoSlice.reducer;
