//import
import express from 'express';
import carRoutes from './routes/carRuotes.mjs';

//Setup
const app = express ();
const PORT = 3000 || 3001

// Middelware

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