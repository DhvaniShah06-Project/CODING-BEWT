const http = require('http')
const url = require('url');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.statusCode = 200;
    res.write("Hello World ");
  
    const parseUrl = new URL(req.url , `http://${req.headers.host}`);
    const pathname =  parseUrl.pathname;

   if(pathname=="/about"){
    res.write("<br/> This is about page ");
   }else if(pathname=='/contact')
    res.write("<br/>This is contact Page ");
    else{
        res.write("<br/> Default Home Page");
          res.write("<br/> Welcome To my Web Server : ");
        res.write('<br/><button onclick="window.location.href=\'https://www.youtube.com\'">Click To Go To Youtube</button>');
    
    }
    res.end();

});
server.listen(3700,()=>{
    console.log("Server Runned Successfully !!! at localhost At port : 3700")
})