//step 3
//IMP-->createTodo api kya karna chata tha? -> ek todo ka obj create karaga  use andar title,desc dalaga then woh obj ko DB mai dalaga.
//(bassically working present hoga model mai) controller mapped/dependend hai model se.(controller)
//if mujhe TODO obj banake insert karna hai DB ke andar.agar mujhe todo obj banana hai to TODO ka schema
// chiya aur woh model mai pada hai aur woh mujha import karwana padaga. for import use require.
const Todo = require("../models/todo");
//define route handler--(agar tum ish controller pe aaye ho defenately koi route pe hit kiye hoge.becz kise route se mapped hai yeh controller).
//toh jisbhi route ke duara pounch hoh uske liya route handler likhna hai.
exports.createTodo = async(req,res)=>{//2nd type of export syntex.WHY ASYNC FUN?->becz baki sara fun wait na kare.
//like jab bhi DB se kuch access karna hai to main thread block na ho means koi wait na kare aur baki ka code affect na ho thats why use async.
   try{
       //extract title and desc from request ki body se. //model se  
       const{title,description} = req.body; //data fetch karliya
       //create a new TODO OBJ and insert in DB.
       const response = await Todo.create({title,description});//create mean insert //data insert kiya. //await keywd is placed before call to a fun that returns a promise.
       //send a json response with sucess flag
       res.status(200).json({  //res ke ander status set kardiya then json body ke andar yeh sab dal doh //200 ->req was successfull.
        success:true,
        data:response,//jo bhi response db se aya hai
        message:'entry created successfully'
       })

   }
   catch(error){
      console.error(error);
      console.log(error);
      res.status(500)//500 -> internal server error hota
      .json({
        success:false,
        data:"internal server error",
        message:error.message,
      })
   }
}
//module.export bhi likh sakte ho createTodo ko export karne ke liya.
//module.export ={createTodo};
