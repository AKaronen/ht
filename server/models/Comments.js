const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    post: {type: String},
    items: []
});

module.exports = mongoose.model("comments", CommentSchema);