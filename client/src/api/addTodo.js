import axios from "axios";

export const addTodoApi = async (payload) => {
    console.log(payload, "payload")
    try {
        const response = await axios.post("http://localhost:3004/api/todos/addTodo", payload);
        console.log(response, "api response");
        return response;

    } catch(error) {
        console.log(error);
    }
}