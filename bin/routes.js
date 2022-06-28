const controller = require("./controller")

module.exports = (app) =>{
  app.get("/", (req,res)=>{
  res.send("Hola Mundo")
})
  
 // Rutas para Usuarios

//Crear un usuario
app.post("/usuarios",(req, res)=>{
  let usuarios = req.body
  controller.postUsuarios(usuarios, res)
 })

//Traer todos los usuarios
app.get("/usuarios",(req, res)=>{
  controller.getUsuarios(res)
})

  
//Traer usuarios por su id
app.get("/usuarios/:id",(req, res)=>{
  let id = req.params.id
  controller.getUsuariosPorId(id, res)
})
  
//Actualizar un usuario por su id
  app.put("/usuarios/:id",(req, res)=>{
   let id = req.params.id;
    let usuarios = req.body
    controller.updateUsuariosPorId(id, usuarios, res)
  })
  
//Eliminar un usuario por id
  app.delete("/usuarios/:id",(req, res)=>{
    let id = req.params.id
    controller.deleteUsuariosPorId(id, res)
  })

// Rutas para puntaje

//Crear un puntaje
  app.post("/puntajes",(req, res)=>{
  let puntajes = req.body
  controller.postPuntajes(puntajes, res)
 })

//Traer todos los puntajes
app.get("/puntajes",(req, res)=>{
  controller.getPuntajes(res)
})
  
//Traer todos los punatjes por su id
app.get("/puntajes/:id",(req, res)=>{
  let id = req.params.id
  controller.getPuntajesPorId(id, res)
})
  
//Actualizar un puntaje por su id
  app.put("/puntajes/:id",(req, res)=>{
   let id = req.params.id;
    let puntajes = req.body
    controller.updatePuntajesPorId(id, puntajes, res)
  })
  
//Eliminar un puntaje por id
  app.delete("/puntajes/:id",(req, res)=>{
    let id = req.params.id
    controller.deletePuntajesPorId(id, res)
  })
  
}
