
const mongoose=require("mongoose")

const DataSchema=mongoose.Schema({
     name:{type :String, required: true},
    date:{type :String, required: true},
    category:{type :String, required: true},
    expense:{type :String, required: true},
    amount:{type :String, required: true},
      update:{type :String, required: false},
      email:{type :String, required: false}

})

const DataModel=mongoose.model("expense",DataSchema)

module.exports={DataModel}