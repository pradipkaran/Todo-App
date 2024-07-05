//step -1(actually last step after defining all their works).
//index.js routes se mapped hoga
//driver code // kish kish ko map  karna chate hain /import/listen/connect.. etc.
const express = require("express");//server instanciate karaliya aur uska naam app de diya.
const app = express();

//load config from .env file if u went to listen PORT no.(explain in db.js)
require("dotenv").config();
const PORT = process.env.PORT || 4000;//ya to PORT no process.env file se ayaga warna default 4000.

//Need middleware to parse json request ke body se (title,desc) becz without parser it give error.
app.use(express.json());//app use karaga express.json middleware ko then i eligible for parsing.

//import routers for TODO API
const TodoRoutes = require("./routes/todos");//todo ke routes nikal liya.
//mount/add the TODO API Routes  //mount means it prepends the path to your routes exp -> /list and u mount it to /api/v1 ->o/p->/api/v1/list.
app.use("/api/v1",TodoRoutes);//pehle localhost/PORT ajaiga then api/v1 then Todoroutes ke andar jo jo bhi map hoga in routes folder i.e /createTodo. 


//start server
app.listen (PORT,()=>{
    console.log(`server started succesfully at ${PORT}`);
})
//connect to the Database
const dbconnect = require("./config/database");
dbconnect();
//default routes define
app.get("/",(req,res) =>{
    res.send(`<h1>THIS IS HOME PAGE</h1>`);     //optional- only to show something in UI
})