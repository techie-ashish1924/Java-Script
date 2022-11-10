// async function abc () {
//     await fs.promises.writeFile("q1.html", "hello");
//     let data = await fs.promises.readFile("q2.html", "utf-8");
//     console.log(data);
//     return "how are you";
// }

// async function main() {
//     let data = await abc();
//     console.log(data);
// }
// main();

// const fs = require("fs");
// async function abc () {
//     await fs.promises.writeFile("q1.html", "hello");
//     let data = await fs.promises.readFile("q2.html", "utf-8");
//     console.log(data);
//     return "how are you";
// }

const fs = require("fs");

function abc()
{
    return new Promise(function(resolve,reject)
    {
        fs.promises.writeFile("q1.html", "hello");
        fs.promises.readFile("q2.html", "utf-8").then(function(data)
        {
            console.log(data);
            resolve("How are you");
        });
        
    })
}



async function main() {
    let data = await abc();
    console.log(data);
}
main();