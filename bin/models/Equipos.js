// mongoose nos permite conectarnosanuestras bases de datos y hecer  CRUD 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// un esquema es la estructura de datos de nuestra colección, defineas  los tipos de datos
//y sus relaciones
const usuariosSchema = new Schema({
  nombre:String,
  val_equipo:String,
  puntaje:{
    type:Schema.Types.ObjectId,
    ref:"puntajes"
  }
});

 // exportamo al modelo
 var Usuarios=mongoose.model("Usuarios",usuariosSchema);
 module.exports = Usuarios;