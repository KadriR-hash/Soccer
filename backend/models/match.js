//import Mongoose
const mongoose = require('mongoose');

//generate schema
const matchSchema = mongoose.Schema({
    teamOne : String,
    teamtwo : String,
    scoreOne : String,
    scoreTwo : String
});

// generate model user
const match = mongoose.model("Match", matchSchema);

// export model
module.exports = match;