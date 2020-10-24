const tutorialService=require('../services/tutorialService')
const isAuthenticate= require('../services/tokenService')
const express=require('express')
const router=express.Router();
const constant=require('../utils/constant')

router.post("/", isAuthenticate ,(req,res)=>
{
    console.log("  from tutoriLal controller user detail",req.user._id)
    tutorialService.create({...req.body,author:req.user._id}).then((result) => {
        res.send(result)
       
    }).catch((error) => {
        
        res.send(error)
       
    });
});

router.get("/:id",(req,res)=>
{
    console.log("calling from get by id")
    tutorialService.getById(req.params.id).then((result) => {
        res.send(result)
       
    }).catch((error) => {
        
        res.send(error)
       
    });
});

router.get("/",(req,res)=>{
    let page = req.query.page;
    let size = req.query.size;
    console.log(page,size);
    console.log("calling from get all")
    tutorialService.getAll(page,size).then((result) => {
        res.send(result)
       
    }).catch((error) => {
        
        res.send(error)
       
    });
});

router.put("/:id",(req,res)=>
{
    console.log("calling from get by id")
    tutorialService.updateById(req.params.id,req.body).then((result) => {
        res.send(result)
       
    }).catch((error) => {
        
        res.send(error)
       
    });
});

router.delete("/:id",(req,res)=>
{
    console.log("calling from get by id")
    tutorialService.deleteById(req.params.id).then((result) => {
        res.send(result)
       
    }).catch((error) => {
        
        res.send(error)
       
    });
});
router.delete("/",(req,res)=>
{
    console.log("calling from get by id")
    tutorialService.deleteAll().then((result) => {
        res.send(result)
       
    }).catch((error) => {
        
        res.send(error)
       
    });
});

module.exports=router;