const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {type: String},
    title: String,
    item: String,
    time: String,
    comments: []
});

module.exports = mongoose.model("Posts", PostSchema);