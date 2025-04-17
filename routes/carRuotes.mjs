import express from 'express';

const router = express.Router();

//just to test if the route is working.
// router.get('/',(req,res)=>{
//     res.send('This carRoute works')
// });


//creating a chain wiht .route
router
    .route('/').post((req, res) => {
        res.send('Added car')
    }).get((req, res) => {
        res.send('Getting car')
    })



export default router;
