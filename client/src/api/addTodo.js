import axios from "axios";

export const addTodoApi = async (payload) => {
 
    try {
        const response = await axios.post("http://localhost:3004/api/todos/addTodo", payload);
        return response;

    } catch(error) {
        console.log(error);
    }
}