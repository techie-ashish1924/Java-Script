
async function abc()
{
    return new Promise((resolve,reject) =>
    {
        resolve(data);
        console.log("hello");
    })
}



function abc()
{
    const p = new Promise((resolve,reject) =>
    {
        resolve(data);
        console.log("hello");
    })
}