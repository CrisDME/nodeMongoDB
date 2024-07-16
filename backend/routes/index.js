const express = require('express');
const router = express.Router();

const { mostrarPaginaPrincipal } = require('../controllers/usuarios.controller');

router.get('/', mostrarPaginaPrincipal);

module.exports = router;



/*
const express = require('express');
const usuarioController = require('../controllers/usuarios.controller');

let app = express();

app.get('/consultar', (req, res) => {
    usuarioController.consultar();
});

app.get('/insertar', (req, res) => {
    if (usuarioController.insertar())
        res.status(200).json({"mensaje": 'Usuario insertado'});
    else
        res.status(500).json({"mensaje": 'Error al insertar usuario'});
});

app.listen(9999);
*/