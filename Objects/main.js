// objects
// 
// let obj = {
// 
    // "hello1" : 1,
    // "hello2" : 2,
// 
    // Welcome : function()
    // {
        // console.log('welcome')
    // },
        // arr:['maruti','swift','baleno'],
        // 'new car' : 'audi',
    // 
// }
// 
// console.log(obj.name);
// 
// console.log(obj["hello1"]);
// 
// objext values 
// 
// console.log(Object.keys(obj));
// 
// object values
// 
// console.log(Object.values(obj));
// 
// console.log(Object.values(obj));


// print the occurance of letters in a s tring in key : value form

let str = "aabc bbca caab ddac";

// let arr = new Array(26);

let obj = {};

for(let i of str)
{
    if(!obj[i])
    {
        obj[i] = 1;
    }
    else{
        obj[i] = obj[i] + 1;
    }
}

console.log(obj);

// for(let i=0;i<str.length;i++)
// {
    // arr[str.charAt(i) - 97]++;
// 
// }

// for(let i=0;i<arr.length;i++)
// {
    // console.log(arr[i]);
// }


// console.log(arr);

