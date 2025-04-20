import express from 'express';
const router = express.Router();

import users from '../data/users.mjs';
import posts from '../data/posts.mjs';
import comments from '../data/comments.mjs';

//description: this route gtes all all users
//path : /api/user

router.route('/').get((req, res) => {
    const links = users.map((user) => ({
        href: `/api/user/${user.id}`, //generate the user ID
        rel: "user",
        type: "GET",
    }));

    res.json({ users, links });

}).post((req, res) => {
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

        const links = [
            { href: `/api/user/${user.id}`, rel: "self", type: "GET" }
        ];
        
        res.json(users[users.length - 1]);


    } else {
        res.json({ error: 'Insufficient Data' });
    }

});

//description: this route gtes one user
//path : /api/user/:id
router.route('/:id').get((req, res) => {
    const user = users.find((u) => u.id == req.params.id);

    if (user) {
        const links = [
            { href: `/api/user/${user.id}`, rel: "self", type: "GET" }
        ];

        res.json({ user, links });
    } else {
        res.status(404).json({ error: 'User not found' });
    }



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

    if (user) {
        const links = [
            { href: `/api/user/${req.params.id}`, rel: "self", type: "GET" }
        ];

        res.json({ user, links });
    } else {
        next()
    }
})
    .delete((req, res, next) => {
        // res.send('Delete') testing if delete is working
        const user = users.find((u, i) => {
            if (u.id == req.params.id) {
              users.splice(i, 1);
              return true;
            }
          });

          if (user) {
            const links = [
                { href: `/api/user`, rel: "all-users", type: "GET" } // to fetch all users
            ];
    
            res.json({ message: `User with ID ${req.params.id} deleted`, user, links }); // helps me to see if the user was deleted instead of the old msg 
        } else {
            next()
        }
    });


export default router;