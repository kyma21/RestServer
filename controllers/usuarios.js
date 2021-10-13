const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const {
    q,
    nombre = "No existe el nombre",
    apikey,
    page = 1,
    limit,
  } = req.query;
  res.json({
    msg: "get API-Controlador",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put API-Controlador",
    id,
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body; //Es para enviarlo en el body
  res.json({
    msg: "post API-Controlador",
    nombre,
    edad, //Llama esa constante y lo envía al body ////Es una validación para que el usuario no envíe más cosas de las que se le pide
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "patch API-Controlador",
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API-Controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosPatch,
  usuariosDelete,
};
