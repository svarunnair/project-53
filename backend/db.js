const mongoose=require("mongoose")
require("dotenv")

const connection =mongoose.connect("mongodb://127.0.0.1:27017/")

module.exports={connection}
