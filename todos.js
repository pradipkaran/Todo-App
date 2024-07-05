//step-2 but write routes at last after controller.
//routes dependend on controller(route). controller fetch karke lana padaga.
//yahen routes create karunga aur yahan define karunga path kish controller se mapped hai.(explain in nxt line)
//here i create all diffs routes like-->/create todo -> jab yeh route hit hoga to ek operation/logic perform hoga.
//- >aur yeh route kisi logic se mapped hai aur woh bussiness logic controller folder pe hoga.
//example-> if /createtodo(route) ki reqst aya (controller)->then DB mai entry create kardo.
//-----------------X----------------
const express = require("express");
const router =express.Router();

//import controller
const {createTodo}=require("../controllers/createTodo");
const {getTodo,getTodoById}=require("../controllers/getTodo");
const {updateTodo}=require("../controllers/updateTodo");
const {deleteTodo}=require("../controllers/deleteTodo");
//define API routes
//create route req
router.post("/createTodo",createTodo);//aur createtodo path ko mai controller se map kara diya
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports = router;



