const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {
    mongoose: mongoose,
    airport: require('./airport.model'),
    flight: require('./flight.model'),
    terminal: require('./terminal.model'),
    passenger: require('./passenger.model')
};

module.exports = db;
