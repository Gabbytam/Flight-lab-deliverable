const mongoose = require('mongoose');

const Terminal = mongoose.model (
    "Terminal",
    new mongoose.Schema({
        name: String,
        flights: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Flight'
            
        }],
        capacity: Number
    })
)

module.exports = Terminal 

// - Terminal
// - name(String)
// - flights(Array of REFERENCED Flight Objects)
// - capacity(Number)

//required: true can be added to flights key if you need flights to be required
//with referenced documents, use populate method to get info from the id 
// can query a referenced collection