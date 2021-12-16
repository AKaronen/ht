const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String},
    email: {type: String},
    password: {type: String},
    admin: {type: Boolean}
});

module.exports = mongoose.model("users", userSchema);