const {Router}=require("express")
const {userModel}=require("../model/user.model")
const {DataModel}=require("../model/data.model")
var jwt = require('jsonwebtoken');
require("dotenv").config()

const userControler=Router()


userControler.post('/',async(req,res)=>{
    const {name,email,password}=req.body
    const user = await userModel({
        name,
        email,
        password
    })
     try {
        await user.save();
        res.send({ message: "User saved successfully", user });
    } catch (err) {
        console.log("err", err);
        res.status(500).send({ error: "An error occurred while saving user data" });
    }

})


userControler.get('/',async(req,res)=>{
   
    try{
     const userData= await userModel.find()
        res.send(userData)
    }
    catch(err){
        res.send("error")
    }
})


userControler.post("/login",async(req,res)=>{
    const {email}=req.body

    const user = await userModel.findOne({email})
    console.log("userrrrrrrrr",user)
    if(user!==null){
        const token = jwt.sign({ user:email }, process.env.SECRET);
        res.send("login successfull")
 console.log(token)
 
    }
    else{
        res.send("login failed!!!!!!")
    }
})

userControler.post("/data",async(req,res)=>{
    const {name,date,category,expense,amount,email}=req.body
   
     const currentDate = new Date();
      console.log("dataaaa",currentDate,name,date,category,expense,amount,email)

    const data = await DataModel({
           name,
            date,
            category,
            expense,
            amount,
            update: currentDate,
            email
    })
    console.log("ddddddddddd",data)
    try{
        
        await data.save()
        res.send(data)
    }
    catch(err){
        console.log("err",err)
    }
})


userControler.get('/data',async(req,res)=>{
   try{
    const data= await DataModel.find()
    res.send(data)
   }
   catch(err){
    console.log("err",err)
   }
})






userControler.patch('/:userId',async(req,res)=>{
    const{userId}=req.params
    const patchData=await DataModel.findOneAndUpdate({ _id:userId, userId:req.body.userId},{...req.body})
    if(patchData){
        res.send("updated")
    }
    else{
        res.send("couldn't updated")
    }
})






userControler.delete("/:userId", async (req, res) => {
    const { userId } = req.params;
    console.log("papapap",userId)
    try {
        const dataDelete = await DataModel.findByIdAndDelete(userId);
        if (dataDelete) {
            res.send("Deleted");
        } else {
            res.send("Couldn't delete");
        }
    } catch (error) {
        console.log("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});






module.exports={userControler}