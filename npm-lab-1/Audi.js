const express = require('express');
const app = express();
app.get("/about",(req,res)=>{
    res.send("Hello World about")
})

//game e method nd game e url a thavu joye
app.all(/.*/,(req,res)=>{
    const data = {
        error : "No route Matching"
    }
    res.status(404).send(data)
})

app.listen(3200,()=>{
    console.log("Server Started")
})
