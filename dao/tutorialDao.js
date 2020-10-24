
const tutorialSchema=require('../models/tutorials')
const constant=require('../utils/constant')


const tutorialDAO={
    create:(payload)=>{
       return new tutorialSchema(payload).save();
    },
    
    
    getTutorialByCondition:(condition)=>{
        
        return tutorialSchema.findOne(condition);
    },
    getById:(id)=>{
        
        return tutorialSchema.findOne({_id:id}).populate({
            path:'author',
            select:{name:1,email:1,_id:0}

        });
    },
    getAll:(page,size)=>
    {
        let skip = page?(page-1) * size : 0;        
        return tutorialSchema.find({}).skip(skip).limit(parseInt(size)).populate({
            path:'author',
            select:{name:1,email:1,_id:0}

        });
    },

    
     
     updateById:(id,payload)=>
     {
         payload['updateAt'] = Date.now();
         return tutorialSchema.updateOne(id,{$set:payload})

     },
     deleteAll:()=>
     {
         return tutorialSchema.deleteMany();

     },
     deleteById:(id)=>
     {
         return tutorialSchema.deleteOne(id);

     }
   
    
}



module.exports=tutorialDAO

