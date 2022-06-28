// mongoose nos permite conectarnosanuestras bases de datos y hecer  CRUD 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// un esquema es la estructura de datos de nuestra colección, defineas  los tipos de datos y sus relaciones
const puntajesSchema = new Schema({
usuarios:String,
  idjuego:String,
  puntaje:Number,
});

 // exportamo al modelo
 var Puntajes=mongoose.model("Puntajes",puntajesSchema);
 module.exports = Puntajes;