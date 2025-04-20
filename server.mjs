//import
import express from 'express';
// import carRoutes from './routes/carRuotes.mjs';
import users from './data/users.mjs';
import posts from './data/posts.mjs';
import comments from './data/comments.mjs';
import userRoutes from './routes/userRoutes.mjs'
import postRoutes from './routes/postRoutes.mjs'
import commentRoutes from './routes/commentRoutes.mjs'
import fs from 'fs';
import { error } from 'console';
// console.log(users) making sure pagegs are connected 

// const users = require("./data/users.mjs");
// const post = require("./data/posts.mjs");
// const comment= require("./data/comments.mjs");


//Setup
const app = express ();
const PORT = 3000 || 3001

//view eng
app.engine('template', (filepath, option, callback)=>{

    fs.readFile(filepath, (err, content)=>{
        if (err) return callback(err)
    
    
        const render= content.toString()
    
        return callback(null, render)
    })
    
    })
    
    
    app.set('view','./views');
    app.set('view engine', 'template');
    ////
    // app.engine('template', (filepath, options, callback) => {
    //     fs.readFile(filepath, 'utf8', (err, content) => {
    //         if (err) return callback(err);
    
            
    //         let render = content.toString();
    //         for (const key in options) {
    //             const regex = new RegExp(`{{${key}}}`, 'g');
    //             render = render.replace(regex, options[key]);
    //         }
    
    //         return callback(null, render);
    //     });
    // });
    
    app.set('views', './views'); // Corrected from 'view' to 'views'
    app.set('view engine', 'template');


    

// Middelware
app.use(express.json());



//Body parsing middleware .. read and pares req body
// app.use(express.json());



//Routes
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes)

//custom middleware

// err handling 
app.use((req,res)=>{
    res.status(400)
    res.json({error:"Resource not found"})
})

const logReq= function ( req, res, next){
    console.log('Requet Recived:')
    next()
}
app.use(logReq);

//first test run 
// app.get('/', (req, res)=>{
//     res.send ('run server RUN!')
    
// })

//error handling middelware
// app.use((err,req,res,next)=>{
//     res.status(400).send(err.message)
// })

//Listener 
app.listen(PORT, ()=>{

    console.log(`server runing op Port: ${PORT}`)
    
    })