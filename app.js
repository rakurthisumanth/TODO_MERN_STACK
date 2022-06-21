const bodyParser = require('body-parser')
const express=require('express')
const mongoose=require("mongoose")
require("dotenv").config()
const app=express()

const url=process.env.MONGO_URI

mongoose.connect(url,{useNewUrlParser:true})

const con=mongoose.connection

con.on("open",()=>{
    console.log("Connected ......")
})

app.use(express.json())
const firstRouter=require("./routers/first")
app.use("/first",firstRouter)
app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000,()=>{
    console.log("Server Is Running...")
})