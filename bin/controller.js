const Usuarios = require("./models/Usuarios");

const Puntajes = require("./models/Puntajes");

const Equipos = require("./models/Equipos");

const Juegos = require("./models/Juegos");

const Desarrolladores = require("./models/Desarrolladores");

const Val_juegos = require("./models/Val_juegos");


// CREAR UN USUARIO NUEVO
const postUsuarios = (usuarios, res)=>{
  Usuarios.create(usuarios,(err, u)=>{
      if(err)throw err
      res.send(u);
    })
 }

// TRAER TODOS LOS USUARIOS
const getUsuarios = (res)=>{
  Usuarios.find({})
    .populate('puntaje')
    .exec(function(err, u){
      if(err)throw err
      res.send(u)
    })
  }

// TRAER TODOS LOS USUARIOS POR SU ID 
const getUsuariosPorId = (id,res)=>{
    Usuarios.find({_id:id},(err, u)=>{
      if(err)throw err
      res.send(u)
    })
  }

// MODIFICAR UN USUARIO POR SU ID
const updateUsuariosPorId = (id, usuarios , res)=>{
    Usuarios.findByIdAndUpdate({_id:id}, usuarios, (err, u)=>{
      if(err)throw err
      res.send(u)   
    })
  }

// ELIMINAR UN USUARIO POR SU ID
const deleteUsuariosPorId = (id, res)=>{
   Usuarios.findByIdAndDelete({_id:id},(err, u)=>{
      if(err)throw err
      res.send(u)
    })
  }



// RUTA DE PUNTAJES

// CREAR UN PUNTAJES NUEVO
const postPuntajes = (puntajes, res)=>{
  Puntajes.create(puntajes,(err, u)=>{
      if(err)throw err
      res.send(u);
    })
 }

// TRAER TODOS LOS PUNTAJES
const getPuntajes = (res)=>{
  Puntajes.find({},(err, u)=>{
    if(err)throw err
    res.send(u);
    
    })
  }

// TRAER UN PUNTAJE POR SU ID
const getPuntajesPorId = (id,res)=>{
    Puntajes.find({_id:id},(err, u)=>{
      if(err)throw err
      res.send(u)
    })
  }

// MODIFICAR UN PUNTAJE POR SU ID
const updatePuntajesPorId = (id, puntajes , res)=>{
    Puntajes.findByIdAndUpdate({_id:id}, puntajes, (err, u)=>{
      if(err)throw err
      res.send(u)   
    })
  }

// ELIMINAR UN PUNTAJE POR SU ID
const deletePuntajesPorId = (id, res)=>{
   Puntajes.findByIdAndDelete({_id:id},(err, u)=>{
      if(err)throw err
      res.send(u)
    })
  }

// RUTA DE EQUIPOS

// CREAR UN EQUIPO NUEVO
const postEquipos = (equipos, res)=>{
  Equipos.create(equipos,(err, u)=>{
      if(err)throw err
      res.send(u);
    })
 }

// TRAER TODOS LOS EQUIPOS
const getEquipos = (res)=>{
    Equipos.find({})
    .populate('usuarios')
    .exec(function(err, u){
      if(err)throw err
      res.send(u)
    })
  }

// TRAER LOS EQUIPOS POR SU ID
const getEquiposPorId = (id,res)=>{
    Equipos.find({_id:id},(err, u)=>{
      if(err)throw err
      res.send(u)
    })
  }

// MODIFICAR UN EQUIPOS POR SU ID
const updateEquiposPorId = (id, equipos , res)=>{
    Equipos.findByIdAndUpdate({_id:id}, equipos, (err,u)=>{
      if(err)throw err
      res.send(u)   
    })
  }

// ELIMINAR UN EQUIPO POR SU ID
const deleteEquiposPorId = (id, res)=>{
   Equipos.findByIdAndDelete({_id:id},(err, u)=>{
      if(err)throw err
      res.send(u)
    })
  }

//
// RUTA DE JUEGOS
//

// CREAR UN JUEGO NUEVO
const postJuegos = (juegos, res)=>{
  Juegos.create(juegos,(err, u)=>{
      if(err)throw err
      res.send(u);
    })
 }

// TRAER TODOS LOS JUEGOS
const getJuegos = (res)=>{
    Juegos.find({})
    .populate('usuarios')
    .exec(function(err, u){
      if(err)throw err
      res.send(u)
    })
  }

// TRAER LOS JUEGOS POR SU ID
const getJuegosPorId = (id,res)=>{
    Juegos.find({_id:id},(err, u)=>{
      if(err)throw err
      res.send(u)
    })
  }

// MODIFICAR UN JUEGO POR SU ID
const updateJuegosPorId = (id, juegos , res)=>{
    Juegos.findByIdAndUpdate({_id:id}, juegos, (err,u)=>{
      if(err)throw err
      res.send(u)   
    })
  }

// ELIMINAR UN JUEGO POR SU ID
const deleteJuegosPorId = (id, res)=>{
   Juegos.findByIdAndDelete({_id:id},(err, u)=>{
      if(err)throw err
      res.send(u)
    })
  }

//
// RUTA DE DESARROLLADORES
//

// CREAR UN DESARROLLADOR NUEVO
const postDesarrolladores = (desarrolladores, res)=>{
  Desarrolladores.create(desarrolladores,(err, u)=>{
      if(err)throw err
      res.send(u);
    })
 }

// TRAER TODOS LOS DESARROLLADORES
const getDesarrolladores = (res)=>{
    Desarrolladores.find({})
    .populate('usuarios')
    .exec(function(err, u){
      if(err)throw err
      res.send(u)
    })
  }

// TRAER LOS DESARROLLADORES POR SU ID
const getDesarrolladoresPorId = (id,res)=>{
    Desarrolladores.find({_id:id},(err, u)=>{
      if(err)throw err
      res.send(u)
    })
  }

// MODIFICAR UN DESARROLLADOR POR SU ID
const updateDesarrolladoresPorId = (id, desarrolladores , res)=>{
    Desarrolladores.findByIdAndUpdate({_id:id}, desarrolladores, (err,u)=>{
      if(err)throw err
      res.send(u)   
    })
  }

// ELIMINAR UN DESARROLLADOR POR SU ID
const deleteDesarrolladoresPorId = (id, res)=>{
   Desarrolladores.findByIdAndDelete({_id:id},(err, u)=>{
      if(err)throw err
      res.send(u)
    })
  }

//
// RUTA DE VAL_JUEGOS
//

// CREAR UN VAL_JUEGO NUEVO
const postVal_juegos = (val_juegos, res)=>{
  Val_juegos.create(val_juegos,(err, u)=>{
      if(err)throw err
      res.send(u);
    })
 }

// TRAER TODOS LOS VAL_JUEGOS
const getVal_juegos = (res)=>{
    Val_juegos.find({})
    .populate('usuarios')
    .exec(function(err, u){
      if(err)throw err
      res.send(u)
    })
  }

// TRAER LOS VAL_JUEGOS POR SU ID
const getVal_juegosPorId = (id,res)=>{
    Val_juegos.find({_id:id},(err, u)=>{
      if(err)throw err
      res.send(u)
    })
  }

// MODIFICAR UN VAL_JUEGO POR SU ID
const updateVal_juegosPorId = (id, val_juegos , res)=>{
    Val_juegos.findByIdAndUpdate({_id:id}, val_juegos, (err,u)=>{
      if(err)throw err
      res.send(u)   
    })
  }

// ELIMINAR UN VAL_JUEGO POR SU ID
const deleteVal_juegosPorId = (id, res)=>{
   Val_juegos.findByIdAndDelete({_id:id},(err, u)=>{
      if(err)throw err
      res.send(u)
    })
  }


module.exports ={

  postUsuarios,
  getUsuarios,
  getUsuariosPorId,
  updateUsuariosPorId,
  deleteUsuariosPorId,
  
  postPuntajes,
  getPuntajes,
  getPuntajesPorId,
  updatePuntajesPorId,
  deletePuntajesPorId,

  postEquipos,
  getEquipos,
  getEquiposPorId,
  updateEquiposPorId,
  deleteEquiposPorId,
  
  postJuegos,
  getJuegos,
  getJuegosPorId,
  updateJuegosPorId,
  deleteJuegosPorId,

  postDesarrolladores,
  getDesarrolladores,
  getDesarrolladoresPorId,
  updateDesarrolladoresPorId,
  deleteDesarrolladoresPorId,

  postVal_juegos,
  getVal_juegos,
  getVal_juegosPorId,
  updateVal_juegosPorId,
  deleteVal_juegosPorId,
   
}