const Usuario = require('../models/usuarios.models');

const mostrarPaginaPrincipal = (req, res) => {
  res.render('pages/index', { title: 'Inicio - MongoDB' });
};

const consultarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.render('pages/users/consultar', { title: 'Consultar Usuarios - MongoDB', usuarios });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al consultar usuarios');
  }
};

const insertarUsuario = async (req, res) => {
  try {
    const { correo, pass, rol, cedula } = req.body;
    const nuevoUsuario = new Usuario({ title: 'Registrar Usuarios - MongoDB', correo, pass, rol: rol || 'guest', cedula });
    await nuevoUsuario.save();
    res.redirect('/usuarios/consultar');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al insertar usuario');
  }
};

const mostrarFormularioInsercion = (req, res) => {
    res.render('pages/users/insertar', { title: 'Insertar Nuevo Usuario - MongoDB' });
};

const actulizar = async (req, res) => {
  
};


module.exports = {
  mostrarPaginaPrincipal,
  consultarUsuarios,
  insertarUsuario,
  mostrarFormularioInsercion,
  actulizar
};



/*
const userModelo = require('../models/usuarios.models');

exports.consultar = async(req,res)=>{
    let resultado = await userModelo.find();
    console.log(resultado)
}

exports.insertar = async(req,res)=>{
    const nuevoUsuario ={
        "correo": "correo1@correo1.com",
        "pass": "123456",
        "rol": "admin",
        "cedula": "123456"
    };
    let n = new userModelo(nuevoUsuario);
    return await n.save();
}
*/