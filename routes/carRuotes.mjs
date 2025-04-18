import express from 'express';

const router = express.Router();

//just to test if the route is working.
// router.get('/',(req,res)=>{
//     res.send('This carRoute works')
// });

//DB
const cars = [];



//creating a chain wiht .route
router
    .route('/').post((req, res) => {
        console.log(req.body)
        res.send('Added car')
    }).get((req, res) => {
        res.json(cars)
    })



export default router;
