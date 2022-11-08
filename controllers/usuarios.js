const {response} = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg:" api GET desde controlador"
    });
  }

  const usuariosPost = (req, res) => {
    res.json({
        msg:" api POST desde controlador"
    });
  }
  const usuariosPut = (req, res) => {
    res.json({
        msg:" api PUT desde controlador"
    });
  }
  const usuariosPatch = (req, res) => {
    res.json({
        msg:" api PATCH desde controlador"
    });
  }

  const usuauriosDelete = (req, res) => {
    res.json({
        msg:" api DELETE desde controlador"
    });
  }

  module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuauriosDelete
};