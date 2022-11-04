const fs = require("fs");

/*  const { resolve } = require("path");

    let readFilePromise = fs.promises.readFile("file1.html","utf-8");

    console.log(readFilePromise);

    resolve(readFilePromise);

    readFilePromise.then((data) =>
    {
         console.log(data);
     })

     let data = await fs.promises.readFile("file1.html","utf-8");
     
     console.log(readFilePromise);
     
     return data;  
*/


// Second way

async function abc()
{
    let data = await fs.promises.readFile("file1.html","utf-8");

    console.log(data);
} 

abc();





