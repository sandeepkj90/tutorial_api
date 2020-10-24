
const userSchema=require('../models/users')
const constant=require('../utils/constant')
const bcrypt=require('bcrypt')

const UserDAO={
    create:(userdetails)=>{
       return new userSchema(userdetails).save();
    },
    checkExist: (email) => {
        console.log(email)
        return userSchema.findOne({email});
    },
    
    getUser:(condition)=>{
        
        return userSchema.findOne(condition);
    },
    comparePassword:async (password,existPassword)=>{
        console.log(password,existPassword)
        let data =  await bcrypt.compare(password,existPassword);
        console.log(" am from the compare method",data);
        return data;
     },
     
     updateByCondition:(condition,payload)=>
     {
         return userSchema.updateOne(condition,{$set:payload})

     }
   
    
}



module.exports=UserDAO

