//import Mongoose
const mongoose = require('mongoose');

//generate schema
const matchSchema = mongoose.Schema({
    teamName: String,
    dateOfFoundation : String,
    description : String
});

// generate model user
const match = mongoose.model("Match", matchSchema);

// export model
module.exports = match;