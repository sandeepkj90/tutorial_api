const constant = require('../utils/constant');
const tutorialsDAO=require("../dao/tutorialDao")

const tutorialService={
    create:(payload)=>
    {
        return new Promise((reslove,reject)=>
        {
            
            tutorialsDAO.create(payload).then((result) => {
                       console.log(result)
                        reslove({status:constant.HTTP_CODES.SUCCESS, message: constant.MESSAGE.USER.CREATED });
                        
                    }).catch((error) => {
                        console.log("service catch method",error)
                        reject({ status: constant.HTTP_CODES.INTERNAL_ERROR, message: constant.MESSAGE.USER.INTERNAL_ERROR });
                    });









        })
    },
    getAll:(page,size)=>
    {
        return new Promise((reslove,reject)=>
        {
            console.log("am from the service of get all")
            tutorialsDAO.getAll(page,size).then(result=>
                {
                    reslove(result)
                }).catch(error=>
                    {
                        reject(error)
                    })
        })
    },
    getById:(id)=>
    {
        return new Promise((reslove,reject)=>
        {
            console.log("am from the service of getby id")
            tutorialsDAO.getById(id).then(result=>
                {
                    
                    reslove({status:"SUCCESS",data:result})
                }).catch(error=>
                    {
                        //console.log("printing reslut",error)
                        reject(error)
                    })
        })
    },
     
    deleteAll:()=>
    {
        return new Promise((reslove,reject)=>
        {
            console.log("am from the service of delete all")
            tutorialsDAO.deleteAll().then(result=>
                {
                    reslove(result)
                }).catch(error=>
                    {
                        reject(error)
                    })
        })
    },
    deleteById:(id)=>
    {
        return new Promise((reslove,reject)=>
        {
            console.log("am from the service of delete by id")
            tutorialsDAO.deleteById({_id:id}).then(result=>
                {
                    reslove(result)
                }).catch(error=>
                    {
                        reject(error)
                    })
        })
    },
    updateById:(id,payload)=>
    {
        return new Promise((reslove,reject)=>
        {
            console.log("am from the service of update by id")
            tutorialsDAO.updateById({_id:id},payload).then(result=>
                {
                    reslove(result)
                }).catch(error=>
                    {
                        reject(error)
                    })
        })
    },
    


}

module.exports=tutorialService

  

   