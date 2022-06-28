//usuario AngelArgel
//Password 7U6Eu1HcOeCCyzp8

const mongoose = require("mongoose");

// intentamos conectarnos
try {
  // se intenta establecer una conexion con los datos 
  mongoose.connect("mongodb+srv://AngelArgel:7U6Eu1HcOeCCyzp8@cluster0.iapk9cw.mongodb.net/?retryWrites=true&w=majority",
                   {useNewUrlParser: true }
  );
  // en caso de establecer la conexion, se muestra en consola este mensaje 
  console.log("connected databases.");
}
catch (e) {
  // en caso de haber un error se muestra en consola el error 
  console.error(e);
  }
