var express = require('express');
var router = express.Router();
const Posts = require('../models/Posts');


//This api handles all the post related fetches


router.get('/allPosts', (req, res, next) => { //get all the posts
    Posts.find({}, (err, posts) => {
        if (err) throw err;
        if (!posts) {
            return res.json({});
        }
        else {
            return res.send(posts);
        }

    });
});

router.get('/:id', function (req, res, next) { //get a specific post with it's id created by mongoDB
    Posts.findOne({_id: req.params.id}, (err,post) => {
        if(err) return next(err)
        if(post){
            res.send(post);
        }
        else{
            return res.status(404)
        }
    });


});

router.get('/search/:input', function (req, res, next) { //get the searched posts
    var searchRegExp = new RegExp(req.params.input, "i");
    Posts.find({$or:[{item: searchRegExp}, {title: searchRegExp}]}, (err,posts) => { //search input is found in either in the post or the title -> return posts
        if(err) return next(err)
        if(posts){
            res.send(posts);
        }
        else{
            return res.status(404)
        }
    });

});

module.exports = router;