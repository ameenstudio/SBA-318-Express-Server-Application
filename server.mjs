//import
import express from 'express';
import users from './data/users.mjs';
import posts from './data/posts.mjs';
import comments from './data/comments.mjs';
import userRoutes from './routes/userRoutes.mjs'
import postRoutes from './routes/postRoutes.mjs'
import commentRoutes from './routes/commentRoutes.mjs'
import fs from 'fs';
// import { error } from 'console';
// console.log(users) making sure pagegs are connected 

// const users = require("./data/users.mjs");
// const post = require("./data/posts.mjs");
// const comment= require("./data/comments.mjs");


//Setup
const app = express ();
const PORT = 3000 || 3001
app.use(express.static('public'));
// Set up view engine
app.engine('template', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err);
  
      const rendered = content
        .toString()
        .replaceAll('#title#', `${options.title}`)
        .replaceAll('#content#', `${options.content}`);
      return callback(null, rendered);
    });
  });
  

app.set('views', './views');
app.set('view engine', 'template');

app.get('/template', (req, res) => {
    let options = {
        title: "App",
        content: "this is a test "
    };

    res.render('index', options);
});



    

// Middelware
app.use(express.json());

const logReq= function ( req, res, next){
    console.log('Requet Recived:')
    next()
}
app.use(logReq);


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