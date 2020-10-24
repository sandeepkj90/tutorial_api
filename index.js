const express = require('express');
const app=express();
const bodyparser=require('body-parser');
const constant=require('./utils/constant');

require('./db');

app.use(bodyparser.json())


app.use(`/${constant.BASE_URI}/signup`,require('./controller/userController'))
app.use(`/${constant.BASE_URI}/signin`,require('./controller/authController'))
app.use(`/${constant.BASE_URI}/tutorials`,require('./controller/tutorialController'))




app.listen(constant.PORT,()=>{
    console.log("listening to the port"+ constant.PORT)
})
