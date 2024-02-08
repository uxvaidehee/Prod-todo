const { getTodos, addTodo, updateTodo, deleteTodo } = require("../controllers/todoController")

const router = require("express").Router()

router
    .get("/todo", getTodos)
    .post("/todo-add", addTodo)
    .put("/todo-update/:id", updateTodo)
    .delete("/todo-delete/:id", deleteTodo)

module.exports = router
