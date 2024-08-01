import axios from "axios";

export const updateTodoApi = async (_id, payload) => {
    console.log(_id, payload, "for api id and formdata")
 
    try {
        const response = await axios.put(`http://localhost:3004/api/todos/updateTodo/${_id}`, payload);
        return response;

    } catch(error) {
        console.log(error);
    }
}