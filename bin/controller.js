const Usuarios = require("./models/Usuarios");

const Puntajes = require("./models/Puntajes");

// CREAR UN USUARIO NUEVO
const postUsuarios = (usuarios, res)=>{
  Usuarios.create(usuarios,(err, u)=>{
      if(err)throw err
      res.send(u);
    })
 }

// Traer todos los usuarios 
const getUsuarios = (res)=>{
  Usuarios.find({})
    .populate('puntaje')
    .exec(function(err, u){
      if(err)throw err
      res.send(u)
    })
  }

// Traer todos los usuarios por us id
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

// Traer todos los puntajes
const getPuntajes = (res)=>{
  Puntajes.find({},(err, u)=>{
    if(err)throw err
    res.send(u);
    
    })
  }

// Traer todos los puntajes por us id
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

// CRUD PUNTAJES
module.exports ={
  postPuntajes,
  getPuntajes,
  getPuntajesPorId,
  updatePuntajesPorId,
  deletePuntajesPorId,
  postUsuarios,
  getUsuarios,
  getUsuariosPorId,
  updateUsuariosPorId,
  deleteUsuariosPorId
}