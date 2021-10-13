const express = require("express");
const cors = require("cors");
const { use } = require("../routes/usuarios");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    //Middlewares= Funciones que añaden otras funciones al webserver
    this.middlewares();

    this.routes();
  }

  middlewares() {
    //CORS

    //Lectura y parseo del Body
    this.app.use(express.json());

    this.app.use(cors());
    //Directorio público
    this.app.use(express.static("public"));
  }

  //Las rutas
  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor ejecutandose en el puerto ", this.port);
    });
  }
}

module.exports = Server;
