const http = require('http')
const fs = require('fs')
// 1. Hello World Webapp using "http" core module in nodejs
// const server = http.createServer((req,res)=>{
//     res.end("Hello World")
// })
// server.listen(3000,()=>{
//     console.log("Server Startted @3000")
// })

// 2. Create a webapp with 5 pages like about, contact etc.. using “http” core module in NodeJS. (B) 
// const server = http.createServer((req,res)=>{
//     if(req.url=="/home")
//         res.write("Home Page")
//     else if(req.url=="/about")
//         res.write("About Page")
//      else if(req.url=="/contact")
//         res.write("Contact Us Page")
//      else if(req.url=="/profile")
//         res.write("Profile page")
//      else if(req.url=="/setting")
//         res.write("Settings Page")
//     else{
//         res.write("Default Page");
//     }
//     res.end()
// })
// server.listen(3000,()=>{
//    console.log("Server Startted @3000")
//  })


//3. Create a webapp in NodeJS which reads ƒiles like about.txt, contact.txt and display it using http core module (C)
// fs.writeFile("about.txt","This is about file",(err)=>{
//      if(err){
//          console.log("Error : ",err);
//      }
//      else{
//          console.log("File Write Successfully!!!");
//      }
// })

// fs.writeFile("contact.txt","This is contact file",(err)=>{
//      if(err){
//          console.log("Error : ",err);
//      }
//      else{
//          console.log("File Write Successfully!!!");
//      }
// })


// http.createServer((req,res)=>{
//     if(req.url=="/about"){
//         fs.readFile('about.txt',"utf-8",(err,data)=>{
//      if(err){
//          console.log("Error Occured : ",err)
//     }
//      else{
//              res.write(`Data : ${data}`)
//              res.end();
//          }
//  })

//     }
//     else if(req.url=="/contact"){
//         fs.readFile('contact.txt',"utf-8",(err,data)=>{
//      if(err){
//          console.log("Error Occured : ",err)
//     }
//      else{
//              res.write(`Data : ${data}`)
//             res.end()

//          }
//  })
//     }
//     else{
//         res.write("Hello")
//         res.end();
//     }
// }).listen(3000,()=>{
//     console.log("Server Started")
// })

// http.createServer((req,res)=>{
//  if(req.url=="/about"){
//      try{
//     const ans = fs.readFileSync('about.txt',"utf-8");
//      console.log("Sync : ");
//      res.write(ans);
//      res.end();
//  }catch(err){
//      console.log(err);
//  }
//     }
//     else if(req.url=="/contact"){
//          try{
//     const ans2 = fs.readFileSync('contact.txt',"utf-8");
//      res.write(ans2);
//      res.end();
//  }catch(err){
//      console.log(err);
//  }
//     }
//     else{
//         res.write("Hello")
//         res.end();
//     }
//     }).listen(3000,()=>{
//     console.log("Server Started")
// })
     