import express from "express";

const router = express.Router()

router.get("/", (req, res, next) => {
    res.send("all todos")
})

router.get("/:id", (req, res, next) => {
    console.log(req.params.id)
    res.send(`get todo with id ${req.params.id}`)
})

router.post("/", (req, res, next) => {
    res.send("created todo")
})

router.put("/:id", (req, res, next) => {
    console.log(req.params.id)
    res.send(req.params.id)
})

router.delete("/:id", (req, res, next) => {
    console.log(req.params.id)
    res.send(`delete todo with id ${req.params.id}`)
})

export default router;
