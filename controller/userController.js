const userService=require('../services/userService')
const express=require('express')
const router=express.Router();
const constant=require('../utils/constant')

router.post("/",(req,res)=>
{
    
    userService.create(req.body).then((result) => {
        res.send(result)
       
    }).catch((error) => {
        
        res.send(error)
       
    });
});

module.exports=router;