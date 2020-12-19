const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Flight = mongoose.model(
    'Flight',
    new Schema({
        from: String,
        to: String,
        airline: String
    })
)

module.exports = Flight;
