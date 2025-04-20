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

// Middelware
app.use(express.json());



//Body parsing middleware .. read and pares req body
// app.use(express.json());



//Routes
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes)

//custom err handling middleware

app.use((req,res)=>{
    res.status(400)
    res.json({error:"Resource not found"})
})

//first test run 
// app.get('/', (req, res)=>{
//     res.send ('run server RUN!')
    
// })


//Listener 
app.listen(PORT, ()=>{

    console.log(`server runing op Port: ${PORT}`)
    
    })