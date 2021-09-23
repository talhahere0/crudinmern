const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Createuser = require('./UserRouter/UserRouter')

app.use(cors())


//connecting mongoose here

mongoose.connect('mongodb+srv://shantu:talha123@cluster0.w4zcw.mongodb.net/food?retryWrites=true&w=majority',
)

const connectdb = mongoose.connection

connectdb.on('open',()=>{
    console.log('Db is Connected')
})


//starting backend serverSide
app.listen(5000,()=>{
    console.log('App listening on 5000')
})

//middleware
app.use(express.json())
app.use("/UserModel",Createuser)







//the most important thing for us is to
//stay connected with god it doesn't matter
//what happens with you , you always have to 
//stay humble and stay focussed and stay connected 
//with god this is very important for us
