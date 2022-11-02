// Call backs 

/*  
    fi()
    {
        after doing some work - w1

        f2() - > call back.
    }

*/

/* function print(val)
{
    console.log(val);
}

function add(n1,n2,print)
{
    let sum = n1 + n2;
    // return sum;

    print(sum);
}


add(2,3,print);

// extra 

/*  function add(n1,n2)
{
    let sum = n1 + n2;
    // return sum;

    print(sum);
}


add(2,3);    */

// step  

/*
    ---step---
                            
    folder name  --> script.js  --> open with integreted terminal --> npm i fs

*/


// const fs = require("fs");    // every function of fs module is fetched in fs variable


// function print(err,data)
// {
    // if(!err)
    // {
        // console.log(data);
    // }
// 
// }
// 
// for(let i=2;i<=10;i++)
// {
    //  a = q + (char)(i-48) + ".txt";
    // fs.readFile(a,'utf-8',print)
// }
// 

// by using synchro....

/*

const fs = require("fs");

let count = 0;

function print(err,data)
{
    if(!err)
    {
        count++;
    }

    if(count < 3)
    {
        console.log(data);
    }
    fs.readFile('q'+(count+1)+'.html','utf-8',print);
}

fs.readFile('q1'+'.html','utf-8',print);

*/

// BY USING LOOP

const fs = require("fs");

function print(err,data,print)
{
    if(!err)
    {
        console.log(data);
    }
}

for(let i=0;i<3;i++)
{
    fs.readFile('q'+(i+1)+'.html','utf-8',print);
}

fs.readFile('q1.html','utf-8',print);
