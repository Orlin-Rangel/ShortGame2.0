// mongoose nos permite conectarnosanuestras bases de datos y hecer  CRUD 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// un esquema es la estructura de datos de nuestra colección, defineas  los tipos de datos
//y sus relaciones
const juegosSchema = new Schema({
  nombre:String,
  materia:String,
  tema:String,
  grado:Number,
  val_juegos:{
    type:Schema.Types.ObjectId,
    ref:"Valjuegos"
  },
  puntaje:{
    type:Schema.Types.ObjectId,
    ref:"Puntajes"
  },
   equipos:{
    type:Schema.Types.ObjectId,
    ref:"Equipos"
  }
});
 // exportamos al modelo
 var Juegos=mongoose.model("Juegos",juegosSchema); module.exports = Juegos