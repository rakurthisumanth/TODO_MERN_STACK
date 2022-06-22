const mongoose=require("mongoose")

const firstschema= new mongoose.Schema({
    name:{
        type:"String",
        require:true
    }
})
module.exports=mongoose.model("firsts",firstschema)