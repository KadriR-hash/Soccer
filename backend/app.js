//import express
const express = require('express');


//import mongoose
const mongoose = require('mongoose');

// import models
const Team = require('./models/team');
const Player = require('./models/player');
const Match = require('./models/match');
//import body-parser
const bodyParser = require('body-parser');

//create express app
const app = express();


//config body parser
app.use(bodyParser.json());// response : format JSON
app.use(bodyParser.urlencoded({ extended: true }));// permet parcour des body

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

//Connect to database
mongoose.connect('mongodb://localhost:27017/Mean', { useNewUrlParser: true, useUnifiedTopology: true });


// Business Logic : Add team
app.post("/teams", (req, res) => {
    
    //collect data from req body
    let team = new Team({
        teamName: req.body.teamName,
        dateOfFoundation : req.body.dateOfFoundation,
        description : req.body.description
    })

    //save 
    team.save();

    //response
    res.status(200).json({
        message: "TEAM ADDED WITH SUCCESS"
    })
    });
// Business Logic :Get All teams
app.get("/teams", (req, res) => {

    Team.find((err, docs) => {
        if (err) {
            console.log("ERROR");
        } else {
            res.status(200).json({
                teams: docs
            })
        }
    })
})
// Business Logic :Get One team by id
app.get("/teams/:id", (req, res) => {

    let teamId = req.params.id;
    Team.findOne({ _id: teamId }).then(
        (doc) => {
            if (!doc) {
                console.log("ERROR");
            } else {
                res.status(200).json({
                    team: doc
                })
            }
        }


    )
})
// Business Logic :update team
app.put("/teams/:id", (req, res) => {
 

    let team = {
        _id: req.body._id,
        firstName: req.body.firstName,
        dateOfFoundation : req.body.dateOfFoundation,
        description : req.body.description

    }

    Team.updateOne({ _id: req.body._id }, team).then(
        (result) => {
            if (result) {
                console.log(result);
                res.status(200).json({
                    message: "Team UPDATED"
                })
            }
        }

    )

})
// Business Logic :delete team
app.delete("/teams/:id", (req, res) => {


    let teamId = req.params.id;
    Team.deleteOne({ _id: teamId }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "Team DELETED"
                })
            }
        }
    )
})

//-------------------------------------------------------------------------------------------------------------------------------------

// Business Logic : Add player
app.post("/players", (req, res) => {
    
    //collect data from req body
    let player = new Player({
        fullName: req.body.fullName,
        post : req.body.post,
        nOfShirt : req.body.nOfShirt,
        team : req.body.team,
        dateOfBirth : req.body.dateOfBirth
    })

    //save 
    player.save();

    //response
    res.status(200).json({
        message: "PLAYER ADDED WITH SUCCESS"
    })
    });
// Business Logic :Get All players
app.get("/players", (req, res) => {

    Player.find((err, docs) => {
        if (err) {
            console.log("ERROR");
        } else {
            res.status(200).json({
                players: docs
            })
        }
    })
})
// Business Logic :Get One player by id
app.get("/players/:id", (req, res) => {

    let playerId = req.params.id;
    Plyer.findOne({ _id: playerId }).then(
        (doc) => {
            if (!doc) {
                console.log("ERROR");
            } else {
                res.status(200).json({
                    player: doc
                })
            }
        }


    )
})
// Business Logic :update player
app.put("/players/:id", (req, res) => {
 

    let player = {
        _id: req.body._id,
        fullName: req.body.fullName,
        post : req.body.post,
        nOfShirt : req.body.nOfShirt,
        team : req.body.team,
        dateOfBirth : req.body.dateOfBirth

    }

    Player.updateOne({ _id: req.body._id }, player).then(
        (result) => {
            if (result) {
                console.log(result);
                res.status(200).json({
                    message: "Player UPDATED"
                })
            }
        }

    )

})
// Business Logic :delete player
app.delete("/players/:id", (req, res) => {


    let playerId = req.params.id;
    Team.deleteOne({ _id: playerId }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "Player DELETED"
                })
            }
        }
    )
})

//--------------------------------------------------------------------------------------------------------------------------------
// Business Logic : Add match
app.post("/matchs", (req, res) => {
    
    //collect data from req body
    let match = new Match({
        teamOne : req.body.teamOne,
        teamtwo : req.body.teamtwo,
        scoreOne : req.body.scoreOne,
        scoreTwo : req.body.scoreTwo

    })

    //save 
    match.save();

    //response
    res.status(200).json({
        message: "MATCH ADDED WITH SUCCESS"
    })
    });
// Business Logic :Get All matchs
app.get("/matchs", (req, res) => {

    Match.find((err, docs) => {
        if (err) {
            console.log("ERROR");
        } else {
            res.status(200).json({
                matchs: docs
            })
        }
    })
})
// Business Logic :Get One match by id
app.get("/matchs/:id", (req, res) => {

    let matchId = req.params.id;
    Match.findOne({ _id: matchId }).then(
        (doc) => {
            if (!doc) {
                console.log("ERROR");
            } else {
                res.status(200).json({
                    match: doc
                })
            }
        }


    )
})
// Business Logic :update match
app.put("/matchs/:id", (req, res) => {
 

    let match = {
        _id: req.body._id,
        teamOne : req.body.teamOne,
        teamtwo : req.body.teamtwo,
        scoreOne : req.body.scoreOne,
        scoreTwo : req.body.scoreTwo

    }

    Match.updateOne({ _id: req.body._id }, match).then(
        (result) => {
            if (result) {
                console.log(result);
                res.status(200).json({
                    message: "Match UPDATED"
                })
            }
        }

    )

})
// Business Logic :delete match
app.delete("/matchs/:id", (req, res) => {


    let matchId = req.params.id;
    Match.deleteOne({ _id: matchId }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "Match DELETED"
                })
            }
        }
    )
})


//export app
module.exports = app;