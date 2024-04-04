const express=require("express")
// const { connection } = require("mongoose")
const {connection} = require('./db')
const {userControler}=require("./routes/user.routes")
// const {dataController}=require("./routes/data.routes")

const app=express()

const cors = require("cors")

app.use(express.json())
app.use(cors())


app.use("/signup",userControler)

// app.use("/data",dataController)

app.get('/',(req,res)=>{
    res.send("hai")
})




app.listen(2000,async()=>{
    try{
        await connection
    }
    catch(err){
        console.log("err",err)
    }
    console.log("Listening to 20000")
})