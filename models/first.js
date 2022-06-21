const mongoose=require("mongoose")

const firstschema= new mongoose.Schema({
    name:{
        type:"String",
        require:true
    },
    tech:{
        type:"String",
        require:true
    },
    sub:{
        type:"Boolean",
        require:true,
    }
})
module.exports=mongoose.model("first",firstschema)