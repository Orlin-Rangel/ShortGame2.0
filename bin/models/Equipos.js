// mongoose nos permite conectarnosanuestras bases de datos y hecer  CRUD 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// un esquema es la estructura de datos de nuestra colección, defineas  los tipos de datos
//y sus relaciones
const equiposSchema = new Schema({
  nombre:String,
  val_equipo:Number,
  usuarios:{
    type:Schema.Types.ObjectId,
    ref:"Usuarios"
  },
  juego:{
    type:Schema.Types.ObjectId,
    ref:"Juegos"
  }
});

 // exportamo al modelo
 var Equipos=mongoose.model("Equipos",equiposSchema);
 module.exports = Equipos;