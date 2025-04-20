import express from 'express';
const router = express.Router();

import users from '../data/users.mjs';
import posts from '../data/posts.mjs';
import comments from '../data/comments.mjs';

//description: this route gtes all all users
//path : /api/user

router.route('/').get((req, res )=>{
    res.json(users)
}).post((req,res)=>{
    //data validation for post 
    if (req.body.name && req.body.email) {
        // Check if the email already exists in the DB
        if (users.find((u) => u.email === req.body.email)) {
            res.json({ error: 'Email Already Taken' });
            return;
        }
        //creatin new user
        const user = {
            id: users[users.length - 1].id + 1,
            name: req.body.name,
            email: req.body.email,
          };
          
          users.push(user);
          res.json(users[users.length - 1]);
          

    } else {
        res.json({ error: 'Insufficient Data' });
    }

});

//description: this route gtes all users
//path : /api/user/:id
router.route('/:id').get((req,res, next)=>{
    const user = users.find((u)=>u.id ==req.params.id);
    if (user)res.json(user);
    else next()

    
    // else res.json({error:'user not found'});

    //console.log(req.params.id) testing 
    // res.send('test')//testing
})
.patch((req, res, next) => {

   

    const user = users.find((u, i) => { 
      if (u.id == req.params.id) { 

        for (const key in req.body) { 

          users[i][key] = req.body[key]; 

        }

        return true;

      }

    });


    if (user) res.json(user);

    else next();

  }
      
)
.delete((req, res, next) => {
    // res.send('Delete') testing if delete is working
});


export default router;