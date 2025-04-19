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
        let  newEntry = {
            id: cars.length,
            ...req.body,
        }
        cars.push(newEntry);
        res.json(newEntry);
    }).get((req, res) => {
        res.json(cars)
    })



export default router;
