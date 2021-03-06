// mongoose nos permite conectarnosanuestras bases de datos y hecer  CRUD 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// un esquema es la estructura de datos de nuestra colección, defineas  los tipos de datos y sus relaciones
const puntajesSchema = new Schema({
  puntaje:Number,
   juego:{
    type:Schema.Types.ObjectId,
    ref:"Juegos"
   },
  
   usuario:{
    type:Schema.Types.ObjectId,
    ref:"Usuarios"
  }
});

 // exportamo al modelo
 var Puntajes=mongoose.model("Puntajes",puntajesSchema);
 module.exports = Puntajes;