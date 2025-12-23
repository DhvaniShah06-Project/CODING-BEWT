const express = require('express');
const app=express();
// 1. Demonstrate the use of middleware in Express. (A) 

// function authMiddleware(req,res,next){
//     if(req.query.admin==="abc"){ 
//         next()
//     }else{
//         res.send("Access Denied")
//     }
// }
// app.get("/admin",authMiddleware,(req,res)=>{
//     res.send("Welcome Admin")
// })

// function Welcome(req,res,next){
//     console.log("App.use Middleware Called")
//     next();
// }
// app.use(Welcome)
// app.get("/",(req,res)=>{
//     res.send("Default Page")
// })

// app.get("/home",(req,res)=>{
//     res.send("Home Page")
// })

// app.get("/about",(req,res)=>{
//     res.send("About Page")
// })
// app.listen(5000,()=>{
//     console.log("Server Started")
// })
// 2. Demonstrate the use of static middleware in Express. (A)
app.use(express.static(__dirname));
app.get('/',(req,res)=>{
    res.send("Try accessing hello.txt file");
})
app.listen(5000,()=>{
    console.log("Server Started")
})

// 3. Install MongoDB and MongoDBCompass (A)

// 4. Setup documents in MongoDB. (A)