const TodoDB = require("../model/todo.model");

const addTodo = async (req, res) => {
    try {
        const { title, description, status, priority } = req.body;

        const newTodo = new TodoDB({
            title: title,
            description: description,
            status: status,
            priority: priority
        });

        await newTodo.save();
        res.status(200).json({ status: 201, message: "Task added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: "Error adding task" });
    }
}

const getAllTodo = async (req, res) => {
    try {
        const allTask = await TodoDB.find();
        res.status(200).json({status : 200, data : allTask});
    } catch(error){
        console.log(error);
        res.status(500).json({ status: 500, message: "Error adding task" });
    }
}

const updateTodo = async (req, res) => {
    try {
        const { _id } = req.params; 
        const updatedData = req.body; 

        const updatedTask = await TodoDB.findByIdAndUpdate(_id, updatedData, { new: true });

        if (!updatedTask) {
            return res.status(404).json({ status: 404, message: "Task not found" });
        }

        res.status(200).json({ status: 200, data: updatedTask });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: "Error updating task" });
    }
}

const deleteTodo = async (req, res) => {
    try {
        const { _id}  = req.params;
        const deletedTask = await TodoDB.findByIdAndDelete(_id);
        res.status(200).json({status: 200, message : "Task deleted"})
    } catch(error){
        console.log(error);
        res.status(500).json({ status: 500, message: "Error updating task" });
    }
}

module.exports = {
    addTodo,
    getAllTodo,
    updateTodo,
    deleteTodo
}