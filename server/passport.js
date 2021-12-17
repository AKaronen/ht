const passport    = require('passport');
const passportJWT = require("passport-jwt");
const Users = require("./models/Users");


//Authentication is done here with the help of passportJWT

const ExtractJWT = passportJWT.ExtractJwt;


const JWTStrategy   = passportJWT.Strategy;



passport.use(new JWTStrategy({ //used Strategy 
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : process.env.SECRET,
},
function (jwtPayload, cb) {

    
    return Users.findOne({email: jwtPayload.email})//if user has been authenticated, return his/her email-address
        .then(user => {
            return cb(null, user);
        })
        .catch(err => {
            return cb(err);
        });
}
));