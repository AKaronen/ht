require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
const cors = require("cors");
const mongoDB = "mongodb://localhost:27017/projectdb" //Database URL
mongoose.connect(mongoDB); //connect the server with the database
mongoose.Promise = Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error!"));

const passport = require("passport"); //passport.js for authentication
require('./passport');


const app = express();

app.use(passport.initialize());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', require('./api/user.js')); //user related api endpoints
app.use('/posts' , require('./api/posts.js')); //posts related api endpoints
app.use('/private', passport.authenticate("jwt", {session: false}), require('./api/private.js')); //private api enpoints with jwt authentication as middleware

if(process.env.NODE_ENV === "production"){ //Build/production server settings
    app.use(express.static(path.resolve("..", "client", "build")));
    app.get("*", (req, res) =>{
        res.sendFile(path.resolve("..", "client", "build", "index.html"))
    });
}else if(process.env.NODE_ENV === "development"){ //development server settings
    var corsOptions = {
        origin: "http://localhost:3000",
        optionsSuccessStatus: 200,
    };
    app.use(cors(corsOptions));
}

module.exports = app;
