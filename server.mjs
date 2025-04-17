//import
import express from 'express';

//Setup
const app = express ();
const PORT = 3000 || 3001

// Middelware

//Routes
//test run 
app.get('/', (req, res)=>{
    res.send ('run server RUN!')
    
})
//this 
//Listener 
app.listen(PORT, ()=>{

    console.log(`server runing op Port: ${PORT}`)
    
    })