const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({ //Creating the Post schema for the database
    user: {type: String},
    title: String,
    item: String,
    time: String,
    comments: []
});

module.exports = mongoose.model("Posts", PostSchema);