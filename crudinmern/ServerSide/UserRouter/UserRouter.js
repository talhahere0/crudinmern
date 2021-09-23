const express = require('express')
const expressrouter = express.Router()
const Usermodel = require('../UserModel/UserModel')


// get data from mongodb and display
expressrouter.get("/update/:id", async(req,res) => {
   await Usermodel.find()
    .then((items)=>res.json(items))
    .catch((err)=> res.status(400).json("Error: "+ err))
})

// get data from mongodb and display
// expressrouter.get("/read/:id", async(req,res) => {
//     await Usermodel.find()
//      .then((items)=>res.json(items))
//      .catch((err)=> res.status(400).json("Error: "+ err))
//  })



//delete data from mongodb
expressrouter.delete("/delete/:id", async(req,res) => {

    try{
        const removedPost = await Usermodel.findByIdAndDelete({_id:req.params.id})
        
        res.json(removedPost)
        
    }catch(err){
        res.json({message:err}) 
    }

})
expressrouter.put("/edit/:id",async (request, response) => {
    let user = await User.findById(request.params.id);
    user = request.body;

    const editUser = new User(user);
    try{
        await User.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
})
//insert data into mongodb
expressrouter.post("/insert", async (req,res) => {

    const username = req.body.username
    const email = req.body.email
    const phone = req.body.phone
    const address = req.body.address

    const CreateUser = new Usermodel({username:username,email:email,phone:phone,address:address})
    console.log(CreateUser)
    try{
        await CreateUser.save()
        .then((response)=>{res.send(response)})
        .catch((err)=>{
            res.send(err)
        })
    }
    catch(err){
        console.error(err);
    }

})

module.exports = expressrouter

