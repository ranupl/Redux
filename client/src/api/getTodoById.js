import axios from "axios";

export const getTodoByIdApi = async (_id) => {
  
    try {
        const response = await axios.get(`http://localhost:3004/api/todos/getTodoById/${_id}`);
        return response.data;

    } catch(error) {
        console.log(error);
    }
}