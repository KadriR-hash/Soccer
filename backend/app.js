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





//export app
module.exports = app;