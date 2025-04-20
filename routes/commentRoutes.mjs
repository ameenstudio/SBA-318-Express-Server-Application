import express from 'express';
import users from '../data/users.mjs';
import posts from '../data/posts.mjs';
import comments from '../data/comments.mjs';


const router = express.Router();
//description: this route gtes all comments
//path : /api/comment

router.get('/', (req, res )=>{
    res.json(comments)
})

//description: this route will get one comment
//path : /api/comment/:id
router.get('/:id',(req,res,next)=>{
    const comment = comments.find(c=> c.id == req.params.id);
    if(comments)res.json(comment)
        // else res.json({error:'page not found'})
    else next()
})
export default router;
