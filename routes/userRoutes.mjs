import express from 'express';
const router = express.Router();

import users from '../data/users.mjs';
import posts from '../data/posts.mjs';
import comments from '../data/comments.mjs';

//description: this route gtes all all users
//path : /api/user

router.get('/', (req, res )=>{
    res.json(users)
})

//description: this route gtes all all users
//path : /api/user/:id
router.get('/:id', (req,res, next)=>{
    const user = users.find((u)=>u.id ==req.params.id);
    if (user)res.json(user);
    else next()
    // else res.json({error:'user not found'});

    //console.log(req.params.id) testing 
    // res.send('test')//testing
})

export default router;