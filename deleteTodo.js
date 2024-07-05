const Todo = require("../models/todo");
exports.deleteTodo = async(req,res)=>{
           try{
        const {id} = req.params;//id find out kar liya then dlt karunga
       const todo = await Todo.findByIdAndDelete(id);
       res.status(200).json({
        success:true,
        data:todo,
        message:`Todo DELETED`,
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
    //42:21 vdo for desc