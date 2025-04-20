import express from 'express';

import users from '../data/users.mjs';
import posts from '../data/posts.mjs';
import comments from '../data/comments.mjs';

const router = express.Router();

//description: this route gtes all posts
//path : /api/post

router.get('/', (req, res )=>{
    res.json(posts)
})

//description: this route will get one post
//path : /api/post/
router.get('/:id',(req,res)=>{
    const post = posts.find(p=> p.id == req.params.id);
    if(post)res.json(post)
        else res.json({error:'page not found'})
})




export default router;