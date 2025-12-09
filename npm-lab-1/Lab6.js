const fs = require('fs');
fs.readFile('data.txt',(err,data)=>{
    if(err){
        console.log("Error Occured : ",err)
        
    }
    else if (data){
            console.log("Data : ",data.toString());
        }
})