import axios from "axios";

export const deleteTodoApi = async (_id) => {
 
    try {
        const response = await axios.delete(`http://localhost:3004/api/todos/deleteTodo/${_id}`);
        return response;

    } catch(error) {
        console.log(error);
    }
}