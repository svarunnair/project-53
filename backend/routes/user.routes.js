const {Router}=require("express")
const {userModel}=require("../model/user.model")
const {DataModel}=require("../model/data.model")
var jwt = require('jsonwebtoken');

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


userControler.post("/login",async(req,res)=>{
    const {email}=req.body

    const user = await userModel.findOne({email})
    console.log("userrrrrrrrr",user)
    if(user!==null){
        // const token = jwt.sign({ user:email }, 'shhhhh');
        res.send("login successfull")
    }
    else{
        res.send("login failed!!!!!!")
    }
})

userControler.post("/data",async(req,res)=>{
    const {name,date,category,description,amount}=req.body
    const data = await DataModel({
        name,
        date,
        category,
        description,
        amount
    })
    try{
        await data.save()
        res.send("data saved")
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



userControler.patch('/:userId', async (req, res) => {
    const userId = req.params.userId;
    const updates = req.body;

    try {
       
        const updatedUser = await userModel.findByIdAndUpdate(userId, updates, { new: true });

        if (!updatedUser) {
            return res.status(404).send("User not found");
        }

        res.send(updatedUser);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).send("An error occurred while updating user");
    }
});



userControler.delete('/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
       
        const deletedUser = await userModel.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).send("User not found");
        }

        res.send("User deleted successfully");
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send("An error occurred while deleting user");
    }
});







module.exports={userControler}