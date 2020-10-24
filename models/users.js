let mongoose=require('../db')
const constant=require('../utils/constant')
const Schema=mongoose.Schema;
const bcrypt=require('bcrypt')
const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
     
    },
    phone:{
        type:Number,
        required:true,
         
    },
    password:{
        type:String,
        required:true

    }
   
})

userSchema.pre('save',async function(next)
 {
    let hashpassword= await bcrypt.hash(this.password,10);
    this.password=hashpassword;
    next();
})

module.exports=mongoose.model(constant.MODEL_NAME.USER,userSchema);