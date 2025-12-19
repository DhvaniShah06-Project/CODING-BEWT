const express = require('express')
const app = express()
app.get("/a?c",(req,res)=>{
    res.send("Hello World")
})
app.listen(3200,()=>{
    console.log("Server Started")
})