const mongoose = require('mongoose');
const Terminal = require('./terminal.model');

const Airport = mongoose.model (
    "Airport",
    new mongoose.Schema({
        name: String,
        country: String,
        terminals: [{}],
        opened: Date,
    })
)

module.exports = Airport

// - Airport
// - Name(String)
// - country(String)
// - terminals(Array of embedded Terminal Objects)
// - opened(Date)