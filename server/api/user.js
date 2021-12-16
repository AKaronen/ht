var express = require('express');
var router = express.Router();
const bcrypt = require("bcryptjs");
const {body, validationResult} = require("express-validator");
const Users = require("../models/Users");
const JWT = require("jsonwebtoken");
const multer = require("multer")
const storage = multer.memoryStorage();
const upload = multer({storage})


router.post('/login',
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


router.post('/register',
  upload.none(),
  body("email").isEmail().trim(),
  body("password").isStrongPassword().withMessage("Password is not strong enough"),
  (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({message: errors.array()[0].msg});
    }
    Users.findOne({email: req.body.email}, (err, user) => {
      if(err) {
        console.log(err);
        throw err
      };
      if(user){
        return res.status(403).json({message: "Email already in use"});
      } 
      else {
        bcrypt.genSalt(5, (err, salt) => {
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
                  admin: false
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