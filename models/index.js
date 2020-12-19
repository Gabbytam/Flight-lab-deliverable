const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {
    mongoose: mongoose,
    airport: require('./airport.model'),
    flight: require('./flight.model'),
    terminal: require('./terminal.model'),
    passenger: require('./passenger.model')
};

//db.mongoose = mongoose;

// db.flight = require("./flight.model");
// db.terminal = require("./terminal.model");
//db.airport = require("./airport.model");

module.exports = db;
