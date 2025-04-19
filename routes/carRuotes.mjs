import express from 'express';

const router = express.Router();

//just to test if the route is working.
// router.get('/',(req,res)=>{
//     res.send('This carRoute works')
// });

//DB
const cars = [];
const links = [
    { href: '/', type: 'GET' },
    { href: '/', type: 'POST' },
];



//creating a chain wiht .route
router
    .route('/').post((req, res) => {
        

        let newEntry = {
            id: cars.length,
            ...req.body,
        }
        cars.push(newEntry);
        res.json([newEntry, links]);
    }).get((req, res) => {
        res.json([cars, links])
    })



export default router;
