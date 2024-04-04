// const {Router} =require("express")
// const {DataModel}=require("../model/data.model")

// const dataControler=Router()


// dataControler.post("/",async(req,res)=>{
//     const {name,date,category,description,amount}=req.body
//     const data = await DataModel({
//         name,
//         date,
//         category,
//         description,
//         amount
//     })
//     try{
//         await data.save()
//         res.send("data saved",data)
//     }
//     catch(err){
//         console.log("err",err)
//     }
// })



// module.exports={dataControler}