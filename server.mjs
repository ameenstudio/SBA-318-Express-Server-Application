//import
import express from 'express';
import carRoutes from './routes/carRuotes.mjs';
import users from './data/users.mjs';
import posts from './data/posts.mjs';
import comments from './data/comments.mjs';
console.log(users)

// const users = require("./data/users.mjs");
// const post = require("./data/posts.mjs");
// const comment= require("./data/comments.mjs");


//Setup
const app = express ();
const PORT = 3000 || 3001



// Middelware
//Body parsing middleware .. read and pares req body
app.use(express.json());




//Routes
app.use('/cars',carRoutes);


//first test run 
// app.get('/', (req, res)=>{
//     res.send ('run server RUN!')
    
// })


//Listener 
app.listen(PORT, ()=>{

    console.log(`server runing op Port: ${PORT}`)
    
    })