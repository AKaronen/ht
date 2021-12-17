var express = require('express');
var router = express.Router();
const bcrypt = require("bcryptjs");
const {body, validationResult} = require("express-validator");
const Users = require("../models/Users");
const JWT = require("jsonwebtoken");

//All user related actions are handled here

router.post('/login', //login router, when a user logs in, this endpoint is reached and it checks if the login data is valid or not
    (req,res,next) =>{
      Users.findOne({email: req.body.email}, (err, user) =>{
          if(err) throw err;
          if(!user){
            return res.status(403).json({message: "Invalid credentials"});
          }
          else{
            bcrypt.compare(req.body.password, user.password, (err, ok) =>{
              if(err) throw err;
              if(!ok){
                return res.status(403).json({message: "Invalid credentials"});
              }
              if(ok){
                var Payload = {
                  email: user.email,
                }
                JWT.sign(Payload, process.env.SECRET, (err, token) =>{
                  if(err) throw err;
                  else{
                    res.json({success: true, token});
                  }  
                }); 
              }
            })
          }
      });
  })


router.post('/register', // when a user registers to the site, this endpoint handles the user creation to the database, the code itself is pretty self-explanitory
  body("email").isEmail().trim(),
  body("password").isStrongPassword().withMessage("Password is not strong enough"),
  (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({message: errors.array()[0].msg}); //sending error messages to the frontend if password isn't strong enough
    }
    Users.findOne({email: req.body.email}, (err, user) => {
      if(err) {
        console.log(err);
        throw err
      };
      if(user){
        return res.status(403).json({message: "Email already in use"}); //sending error messages to the frontend, if the email is already in use
      } 
      else {
        bcrypt.genSalt(5, (err, salt) => { //Only 5 salt this time to lightly speed up the logging in part, not recommended in the final build
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if(err){
              console.log(err);
              throw err
            }
            else {
              Users.create(
                {
                  username: req.body.username,
                  email: req.body.email,
                  password: hash,
                  admin: false //because admin rights should be manually changed, default is set to false! 
                              //However, any admin based content isn't implemented in the Fronend
                },
                (err, ok) => {
                  if(err) throw err;
                  return res.json({success: true});
                }
              );
            }
          });
        });
      }
    });
});



module.exports = router;