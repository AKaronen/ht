var express = require('express');
var router = express.Router();

const Posts = require('../models/Posts');


//This api handles all private connections, these can be only accessed if a user has logged in

router.post('/post', (req, res, next) => {  //Creating a post is handled here

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
router.post('/comment', (req, res, next) => { //Creating a comment is handled here
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

router.get('/', (req, res, next) =>{ //Getting the userdata if needed with this route
    res.json(req.user);
}
);


module.exports = router;