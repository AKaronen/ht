var express = require('express');
var router = express.Router();
const Comments = require('../models/Comments');
const Posts = require('../models/Posts');
const isEmpty = require('lodash.isempty');




router.post('/comments', (req, res, next) => {

    Comments.findOne({ post: req.post._id }, (err, post) => {
        if (err) throw err;
        if (!post) {
            Comments.create({
                post: req.post._id,
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
                    post.items.push(item);
                });
                post.save((err) => {
                    if (err) throw err;
                })
                return res.json(post.items);
            }

        }
    });
});

router.get('/comments', (req, res, next) => {

    Comments.findOne({ post: req.post._id }, (err, post) => {
        if (err) throw err;
        if (!post) {
            return res.json({});
        }
        else {
            return res.json(post.items);
        }

    });
});

router.post('/post', (req, res, next) => {
    Posts.findOne({user: req.body.user }, (err, user) => {
        if (err) throw err;
        if (!user) {
            Posts.create({
                user: req.body.user,
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
                user.items.push(req.body.items);
                user.save((err) => {
                    if (err) throw err;
                })
                return res.json(user.items);
            }

        }
    });
});

router.get('/post', (req, res, next) => {

    Comments.findOne({ post: req.post._id }, (err, post) => {
        if (err) throw err;
        if (!post) {
            return res.json({});
        }
        else {
            return res.json(post.items);
        }

    });
});

router.get('/', (req, res, next) =>{
    res.json(req.user.email);
}
);


module.exports = router;