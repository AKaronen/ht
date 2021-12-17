var express = require('express');
var router = express.Router();
const Posts = require('../models/Posts');





router.get('/allPosts', (req, res, next) => {

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

router.get('/:id', function (req, res, next) {
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

router.get('/search/:input', function (req, res, next) {
    Posts.find({item: new RegExp(req.params.input, "i")}, (err,posts) => {
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