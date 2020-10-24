
const UserDAO=require('../dao/userDao')
const constant=require('../utils/constant')
const jwt=require('jsonwebtoken')
const authService={
    login:(payload)=>{
        return new Promise((resolve,reject)=>
        {
            UserDAO.getUser({email:payload.email}).then( async result=>
                {
                     if(result)
                    {
                       
                        let isCompare= await UserDAO.comparePassword(payload.password,result.password)
                        console.log("am from service" ,isCompare)
                        if(isCompare)
                        {
                            let token = jwt.sign(result._doc, constant.TOKEN_SECRET);
                            let resData={name:result.name,email:result.email,_id:result._id}
                            
                            resolve({user:resData,token});                        
                           
                        }

                        //{status: success, data: [],message:'user register'}
                        else{
                            reject({message:"invalid password"})
                        }
                        
                    }
                    else
                    {
                        reject({message:"user not registered with this email"})
                    }
                })
        })
    }
}
module.exports=authService