const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require ("dotenv").config();


const app = express();

// ejs como el motor de las vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './frontend/views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, './frontend/static')));

app.use('/', require('./backend/routes/index'));
app.use('/usuarios', require('./backend/routes/usuarios.routes'));

app.get('/probarCorreo', (req, res) => {
    const emailServices = require('./backend/utils/emailServices');
    emailServices.sendEmail('maciasespitia@hotmail.com','pruebaCorreo','<h2>Esto es un correo de prueba<\h2>')})

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor en funcionamiento, puerto: ${PORT}`));