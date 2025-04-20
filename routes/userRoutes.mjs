import express from 'express';
const router = express.Router();

import users from '../data/users.mjs';
import posts from '../data/posts.mjs';
import comments from '../data/comments.mjs';

router.get('/', (req, res )=>{
    res.send('User Routes')
})

export default router;