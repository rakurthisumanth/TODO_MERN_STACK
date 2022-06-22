const express=require("express")
const firsts = require("../models/first")

const router=express.Router()

router.get("/",async(req,res)=>{
try{
   const first=await firsts.find()
   res.json(first)

}
catch(err){
    res.send('err '+ err)
}
})

router.post("/post",async(req,res)=>{
    try{

        const a1=await firsts.create({
        ...req.body
        })
        res.json(a1)
    }
    catch(err){
        res.send("error ",err)

    }
})

router.delete("/delete/:id",async(req,res)=>{
    try{
        const deleteItem= await firsts.deleteOne({_id:req.params.id})
        res.send(deleteItem)
    }
    catch(err){
        console.log(err)

    }
    
})

module.exports=router