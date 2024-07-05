//1st db connect karlo
//yeh DB ko connect karti hai application ke saath.iska connection ka kaam hai.
//.env ke DB_URL mai DB create karna hai.
const mongoose = require("mongoose");
require("dotenv").config();//this line means - joh bhi aph .env mai define kiya hoga woh sara feed/load hojaiga process object ke andar by DOTENV LIB.
const dbconnect = () =>{  //ish fun ka kaam hai connect karwana betwn applcn nd DB. joh bhi(dbconnect fun) ko call karaga woh connection establish kardega.
mongoose.connect(process.env.DATABASE_URL,{//feed hojaiga process obj ke andar by (line no 3) 1st install DOTENV library.(isme 2 parameter hota hai ek URL 2nd 2 obj). 
      useNewUrlParser:true, //flags
      useUnifiedTopology:true,
   })//jab dbconnect call karte ho to yeh promish return karta hai using 2 method .then,catch
   .then(()=> console.log("DB connection sucessesfull."))
    .catch((error)=>{
        console.log("issue in DB connection.");
        console.error(error.message);
        process.exit(1);
    
   });
}

module.exports = dbconnect; //fun(dbconnect) ke ander wrap karke export kardiya .