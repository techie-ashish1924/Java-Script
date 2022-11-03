
// const fs = require("fs");
// 
// let count = 0;
// 
// function cb(err,data)
// {
    // console.log(data);
// 
    // count += 1;
// 
    // if(count <= 3)
    // {
        // if(!err)
        // {
            // console.log(data);
        // }
        // else{
            // console.log(err);
        // }
    // }
// 
    // fs.readFile("file" + (count+1) + ".txt", "utf-8",cb);
// }
// 
// fs.readFile("file1.txt","utf-8",cb);

// const fs = require("fs");
// 
// function cb(err,data)
// {
// 
    // if(!err)
    // {
        // console.log(data);
    // }
    // else{
        // console.log(err);
    // }
// }
// 
// for(let i=1;i<=3;i++)
// {
    // fs.readFile("file" + (i) + ".txt" ,"utf-8",cb);    
// }


// set time out function

// setTimeout(()=>
// {
    // console.log("this is a call back");
// },3000);

// question

// let a = true;
// 
// setTimeout(function()
// {
    // a=false;
// },1000);
// 
// while(a)
// {
    // console.log("hello");
// }

// QUESTIONS

let a = true;

setInterval(function()
{
    if(a)
    {
        console.log("hello");
    }
    },1000);

setTimeout(function()
{
    a = false;
},10005);