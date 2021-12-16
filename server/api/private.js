var express = require('express');
var router = express.Router();

const Posts = require('../models/Posts');


router.post('/post', (req, res, next) => {

    Posts.create({
        title: req.body.title,
        user: req.body.user,
        item: req.body.item,
        comments: [],
    }, (err, ok) => {
        if (err) throw err;
        if (ok) {
            res.json(req.body.item);
        }
    })
});
router.post('/comment', (req, res, next) => {
    Posts.findOne({_id: req.body.post}, (err, post) =>{
        if(err) throw err;
        if(post){
            post.comments.push(req.body)
            post.save((err) =>{
                if(err) throw err;
            })
            return res.json(req.body);
        }
    })

})

router.get('/', (req, res, next) =>{
    res.json(req.user);
}
);


module.exports = router;