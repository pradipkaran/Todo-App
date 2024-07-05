//const todo = require("../models/todo");
const Todo = require("../models/todo");
exports.updateTodo = async(req,res)=>{
           try{
        const {id} = req.params;//2nd type for fetch id
        const {title,description} =req.body;
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},//konse id ke loiya update karna chate ho?
            {title,description,updatedAt:Date.now()},//kya update/change karna chate ho?
        )
        res.status(200).json({
            success:true,
            data:Todo,
            message:`updated succesfully`,
        })
           }
       catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'server error',
        });
       }
    }
    