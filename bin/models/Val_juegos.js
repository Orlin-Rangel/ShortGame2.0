// mongoose nos permite conectarnosanuestras bases de datos y hecer  CRUD 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// un esquema es la estructura de datos de nuestra colección, defineas  los tipos de datos y sus relaciones
const val_juegosSchema = new Schema({
  valoracion:Number,
   usuarios:{
    type:Schema.Types.ObjectId,
    ref:"Usuarios"
  },
  juegos:{
    type:Schema.Types.ObjectId,
    ref:"Juegos"
  }
});

 // exportamo al modelo
 var Val_juegos=mongoose.model("Val_juegos",val_juegosSchema);
 module.exports = Val_juegos;