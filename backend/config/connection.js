const mongoose = require('mongoose');
require ("dotenv").config();

const uri =`mongodb+srv://${process.env.USERBD}:${process.env.PASSBD}@clusteradso2669734.ptidq8a.mongodb.net/${process.env.NAMEBD}?retryWrites=true&w=majority`;

mongoose.connect(uri, {});

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
});

mongoose.connection.on('error', (err) => {
    console.error(`Error connecting to MongoDB: ${err.message}`);
});

module.exports = mongoose;
