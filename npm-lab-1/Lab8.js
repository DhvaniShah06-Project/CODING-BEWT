const express=require('express')
const app=express();

// const fs=require('fs');

// 1. Create a hello world webapp using ExpressJS. (A) 

// app.get("/",(req,res)=>{
// res.send("Hello World")
// })
// app.listen(3000,()=>{
//     console.log("Started")
// })

// 2. Create a webapp with 5 pages like about, contact etc.. using ExpressJS. (B)

// app.get("/",(req,res)=>{
//     res.send("Default Page")
// })

// app.get("/home",(req,res)=>{
//    res.send("Home Page")
// })

// app.get("/about",(req,res)=>{
//    res.send("About Page")
// })

// app.get("/contact",(req,res)=>{
//    res.send("Contact Page")
// })

// app.get("/setting",(req,res)=>{
//    res.send("Settings Page")
// })

// app.get("/profile",(req,res)=>{
//    res.send("Profile Page")
// })

// app.listen(3000,()=>{
//     console.log("Server Started")
// })

// 3. Create a webapp in NodeJS which reads ƒiles like about.txt, contact.txt and display it using express (C )

// app.get("/",(req,res)=>{
//     res.send("Default Page")
// })

// app.get("/about",(req,res)=>{
//    fs.readFile('about.txt',"utf-8",(err,data)=>{
//      if(err){
//          console.log("Error Occured : ",err)
//     }
//      else{
//              res.send(`Data : ${data}`)
//          }
//  })
// })

// app.get("/contact",(req,res)=>{
//    fs.readFile('contact.txt',"utf-8",(err,data)=>{
//      if(err){
//          console.log("Error Occured : ",err)
//     }
//      else{
//              res.send(`Data : ${data}`)
//          }
//  })
// })

// app.listen(3000,()=>{
//     console.log("Server Started")
// })

//pass data in <h1>
// app.get("/",(req,res)=>{
//  res.send("<h1>Hello World</h1>")
// })

// app.listen(3000,()=>{
//     console.log("Server Started")
// })

//pass data in json

// app.get("/",(req,res)=>{
//  res.send({
//     "name": "Dhvani",
//     "roll":"457"
//  })
// })

// app.listen(3000,()=>{
//     console.log("Server Started")
// })

//post method
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Default Page")
})

app.post("/login",(req,res)=>{
    const {name,email}=req.body;
    res.json(`Welcome ${name} and your mail is : ${email}`)
    // const user={ "name": "Dhvani", "roll":"457"}
})
// app.get("/user/id",(req,res)=>{
//     console.log(req.params.id)
//     res.send(`user id id : $(req.params.id)`);
// })

app.listen(4000,()=>{
    console.log("Server Started")
})