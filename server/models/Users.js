const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({ //User schema for the database
    username: {type: String},
    email: {type: String},
    password: {type: String},
    admin: {type: Boolean} //admin rights have not been implemented for the frontend yet
});

module.exports = mongoose.model("users", userSchema);