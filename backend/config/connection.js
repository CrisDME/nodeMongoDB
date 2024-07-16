const mongoose = require('mongoose');

const uri ='mongodb+srv://AdminMassage:M9DNvDsjPwquFpFw@clusteradso2669734.ptidq8a.mongodb.net/prueba?retryWrites=true&w=majority';

mongoose.connect(uri, {});

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
});

mongoose.connection.on('error', (err) => {
    console.error(`Error connecting to MongoDB: ${err.message}`);
});

module.exports = mongoose;
