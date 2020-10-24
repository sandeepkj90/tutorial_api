const authService=require('../services/authService')
const express=require('express')
const router=express.Router();
const constant=require('../utils/constant')

router.post("/",(req,res)=>
{
    authService.login(req.body).then(result=>
        {
            res.send(result)
        }).catch(error=>
            {
                res.send(error)
            })
})
module.exports=router