// promises -> states 

// 1 ->  resolve state - work has done.
// 2 -> reject  -> work has not done.
// 3 -> pending state -> nor reject or resolve.

// resolve function

const p = new Promise(function(resolve,reject)
{
    setTimeout(()=>
    {
        let randomNum = Math.floor(Math.random() * 10);

        if(randomNum % 2 == 0)
        {
            resolve(randomNum);
        }
        else{
            reject();
        }
    })

})