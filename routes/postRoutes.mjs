import express from 'express';

import users from '../data/users.mjs';
import posts from '../data/posts.mjs';
import comments from '../data/comments.mjs';

const router = express.Router();
router.get('/', (req, res )=>{
    res.send('Post Routes')
})

export default router;