const express = require('express');
const mongoose = require('./config/connection');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// ejs como el motor de las vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, '../frontend/static')));

app.use('/', require('./routes/index'));
app.use('/consultar', require('./routes/consultar'));
app.use('/insertar', require('./routes/insertar'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor listo mor, pillelo: ${PORT}`));