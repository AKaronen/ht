const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {type: String},
    items: []
});

module.exports = mongoose.model("Posts", PostSchema);