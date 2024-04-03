
const mongoose=require("mongoose")

const DataSchema=mongoose.Schema({
     name:{type :String, required: true},
    date:{type :String, required: true},
    category:{type :String, required: true},
    description:{type :String, required: true},
    amount:{type :String, required: true}
})

const DataModel=mongoose.model("expense",DataSchema)

module.exports={DataModel}