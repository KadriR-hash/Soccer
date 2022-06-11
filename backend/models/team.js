//import Mongoose
const mongoose = require('mongoose');

//generate schema
const teamSchema = mongoose.Schema({
    teamName: String,
    dateOfFoundation : String,
    description : String
});

// generate model user
const team = mongoose.model("Team", teamSchema);

// export model
module.exports = team;