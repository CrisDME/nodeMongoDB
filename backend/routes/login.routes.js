const express = require('express');
const router = express.Router();
const User = require('../models/usuarios.models');

router.post('/', async (req, res) => {
    const { correo, pass } = req.body;

    console.log(correo, pass);
    try {
        const user = await User.findOne({ correo, pass });
        if (!user) {
            return res.status(400).send('Credenciales incorrectas');
        }
        res.redirect('/dashboard');
        
    } catch (err) {
        console.error(err);
        res.status(500).send('Error del servidor');
    }
});

module.exports = router;
