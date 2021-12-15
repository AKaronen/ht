var express = require('express');
var router = express.Router();
const Posts = require('../models/Posts');
const isEmpty = require('lodash.isempty');




router.post('/', (req, res, next) => {

    Posts.findOne({ user: req.user._id }, (err, user) => {
        if (err) throw err;
        if (!user) {
            Posts.create({
                user: req.user._id,
                items: req.body.items,
            }, (err, ok) => {
                if (err) throw err;
                if (ok) {
                    res.json(req.body.items);
                }
            })
        }
        else {
            if (isEmpty(req.body)) {
                return res.sendStatus(403);

            } else {
                req.body.items.forEach(item => {
                    user.items.push(item);
                });
                user.save((err) => {
                    if (err) throw err;
                })
                return res.json(user.items);
            }

        }
    });
});

router.get('/', (req, res, next) => {

    Posts.find({}, (err, posts) => {
        if (err) throw err;
        if (!posts) {
            return res.json({});
        }
        else {
            return res.json({posts});
        }

    });
});

router.get('/:id', function (req, res, next) {
    Posts.find({user: req.params.id}, (err,post) => {
        if(err) return next(err)
        if(post){
            res.json(post);
        }
        else{
            return res.status(404)
        }
    });


});

module.exports = router;