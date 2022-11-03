/* promises -> states 

     1 ->  resolve state - work has done.
     2 -> reject  -> work has not done.
     3 -> pending state -> nor reject or resolve.

    - multiple callbacks
    - anytime and any where
 

*/

// resolve function

const p = new Promise((function(resolve,reject)
{
    setTimeout(()=>
    {
        let randomNum = Math.floor(Math.random() * 10);

        if(randomNum % 2 == 0)
        {
            resolve(randomNum);
        }
        else{
            reject(randomNum);
        }
    },2000)

}))

p.then((data) =>
{
    console.log(data);
    console.log("resolve");
    return "abc";

}).then((data) =>
{
    console.log(data);
    console.log("resolve");
}).catch((data)=>
{
    console.log(data);
    console.log("reject");
})