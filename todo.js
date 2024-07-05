//data ka structure/descripction(schema) provide kardiya thats called models.
//all properties are present/define in models //description of ur data is schema.
//<---creating schema through mongoose.--->
const mongoose = require("mongoose");
const todoschema = new mongoose.Schema(//schema creation using mongoose. //todoschema -> obj hai   //isko controller use karaga.
    {
        title:{//properties
          type:String,
          required:true,
          maxLength:50,
        },
        description:{
          type:String,
          required:true,
          maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }

    }
);
module.exports = mongoose.model("Todo",todoschema);//mongoose ko use karke schema create karte ho usko export karne ka syntex yeh hai.