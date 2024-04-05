const express = require('express')
const Booking = require('../models/booking');
const router = express.Router();


router.post('/',async(req,res)=>{
    try{
        const{name,phone,email}=req.body;
        const booking= await Booking.create({name,phone,email});
    }catch(error){
        console.log(error)
    }
})

module.exports=router;