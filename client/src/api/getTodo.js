import axios from "axios";

export const getTodoApi = async () => {
  
    try {
        const response = await axios.get("http://localhost:3004/api/todos/getAllTodo");
        return response;

    } catch(error) {
        console.log(error);
    }
}