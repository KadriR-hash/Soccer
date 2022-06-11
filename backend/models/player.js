//import Mongoose
const mongoose = require('mongoose');

//generate schema
const playerSchema = mongoose.Schema({
    fullName: String,
    post : String,
    nOfShirt : String,
    team : String,
    dateOfBirth : String
});

// generate model user
const player = mongoose.model("Player", playerSchema);

// export model
module.exports = player;