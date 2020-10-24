const constant = require('../utils/constant');
const userDAO=require("../dao/userDao");

const UserService = {
    
    create:(userdetails)=>{
        return new Promise((reslove,reject)=>{
            userDAO.checkExist(userdetails.email).then((data)=>{
                if(data)
                    reject({ status: constant.HTTP_CODES.INVALID_DATA, message: constant.MESSAGE.USER.USER_ALREADY_REGISTERED });
                else {
                    userDAO.create(userdetails).then((result) => {
                       console.log(result)
                        reslove({status:constant.HTTP_CODES.SUCCESS, message: constant.MESSAGE.USER.CREATED });
                        
                    }).catch((error) => {
                        console.log("service catch method",error)
                        reject({ status: constant.HTTP_CODES.INTERNAL_ERROR, message: constant.MESSAGE.USER.INTERNAL_ERROR });
                    });
                }
            })

        })
    },

    getUser:(condition)=>
    {
        return new Promise((reslove,reject)=>
        {
            console.log("am from the service")
            userDAO.getUser(condition).then(result=>
                {
                    reslove(result)
                }).catch(error=>
                    {
                        reject(error)
                    })
        })
    },

     
    


}

module.exports=UserService

  

   