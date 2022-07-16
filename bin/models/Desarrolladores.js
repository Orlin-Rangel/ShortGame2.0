// mongoose nos permite conectarnosanuestras bases de datos y hecer  CRUD 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// un esquema es la estructura de datos de nuestra colección, defineas  los tipos de datos y sus relaciones
const desarrolladoresSchema = new Schema({
  categoria:String,
   usuarios:{
    type:Schema.Types.ObjectId,
    ref:"Usuarios"
  }
});

 // exportamo al modelo
 var Desarrolladores=mongoose.model("Desarrolladores",desarrolladoresSchema);
 module.exports = Desarrolladores;