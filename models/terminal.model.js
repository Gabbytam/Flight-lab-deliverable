const mongoose = require('mongoose');
const Flight = require('./flight.model');

const Terminal = mongoose.model (
    "Terminal",
    new mongoose.Schema({
        name: String,
        flights: [{
            from: String,
            to: String,
            airline: String
        }],
        capacity: Number
    })
)

module.exports = Terminal 
