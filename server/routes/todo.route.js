import express from "express";
import { createTodo, deleteTodo, getAllTodos, getTodo, updateTodo } from "../controllers/todo.controller.js";
import { verifyToken } from "../utils/verify.js";

const router = express.Router()

router.get("/", verifyToken, getAllTodos)

router.get("/:id", verifyToken, getTodo)

router.post("/", verifyToken, createTodo)

router.put("/:id", verifyToken, updateTodo)

router.delete("/:id", verifyToken, deleteTodo)

export default router;
