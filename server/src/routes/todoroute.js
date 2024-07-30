const express = require("express");
const router = express.Router();
const {addTodo, getAllTodo, updateTodo, deleteTodo} = require("../controller/todo");

router.post("/addTodo", addTodo);
router.get("/getAllTodo", getAllTodo);
router.put("/updateTodo/:_id", updateTodo);
router.delete("/deleteTodo/:_id", deleteTodo);

module.exports = router;