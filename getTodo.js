//import the model
const Todo = require("../models/todo");
//define route handler
 exports.getTodo = async(req,res) =>{
    try{
        //NEED ->fetch/get all Todo items from DB.//use await becz we intract betwn db.
        const todos = await Todo.find({}); //DB se sara data mang liya(fetch) then res mai send kar diya//empty parameter becz jitne bhi todo items hai sara chiya.
//mongoose lib provide many functions such as - .create,find,findbyID and delete ,findbyID and update.
        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo data is fatched",
        });

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
//Fetch a single Todo item through ID.
 exports.getTodoById = async(req,res) =>{
    try{
       //extract todo items  basis on ID.
       const id = req.params.id;//id nikal rahe ho apne parameter mai se.
       const todo = await Todo.findById({_id: id})
       //data for given ID is not found
       if(!todo){
        return res.status(404).json({
            success:false,
            message:"No data found with given id",
        })
       }
       //data for given id FOUND 
       res.status(200).json({
        success:true,
        data:todo,
        message:`Todo ${id} data successfully fetched`,
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