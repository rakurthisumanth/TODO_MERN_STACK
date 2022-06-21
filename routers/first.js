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

module.exports=router