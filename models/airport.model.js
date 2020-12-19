const mongoose = require('mongoose');

const Airport = mongoose.model (
    "Airport",
    new mongoose.Schema({
        name: String,
        country: String,
        terminals: [{
            name: String,
            flights: [{
                from: String,
                to: String,
                airline: String
            }],
            capacity: Number
        }],
        opened: Date,
    })
)

module.exports = Airport