const path = require('path')
// const ans = path.dirname(__dirname)
console.log("Directory Name : ",__dirname);
console.log("File Name : ",__filename);
console.log("File Extension : ",path.extname(__filename));
console.log("Full Path : ",path.resolve(__filename))

const ans = path.join("users","arjun","documents","project");
console.log("Joined Path : ",ans);

const wrongpath = "//folder//subfolder////file.txt"
const clear = path.normalize(wrongpath);
console.log("Clear Path : ",clear);

const a = path.isAbsolute("Pathmodule.js");
if(a==true)
{
    console.log("This is an Absolute Path");
}
else{
    console.log("This is Relative Path");
}

const b = path.resolve('Pathmodule.js');
console.log("Absolute Path : ",b);