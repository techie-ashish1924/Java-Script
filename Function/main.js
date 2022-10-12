
// functions

// let message2 = "I'm 30 years old"
// function abc()
// {
    // let message = "My name is "
    // console.log(message + message2);
// }
// 
// abc();
// console.log(message2)
// 
// function sum(a,b)
// {
    // return a+b;
// }
// 
// console.log(sum(5,2));
// 
// 
// let sayhi = function(){
// 
    // console.log('hello world');
// }
// 
// sayhi();
// 
// let sub = (x,y) => x-y;
// 
// console.log(sub(15,10));


// Numbers


let num = 1000_000;
console.log(num);

let num2 = 1e5;
console.log(num2);

// decimal value

let num3 = 1e-5;
console.log(num3);

// to string method

let num4 = 10;
console.log(num4.toString(2));

// round function

let num5 = 18.7;
console.log(Math.round(num5))

// math power function

console.log(Math.pow(2,3));


// String

let str1 = "This is a string";
console.log(str1);
console.log(str1.length);
console.log(str1[0]);
console.group(str1[str1.length-1]);

console.log(str1.indexOf("is"));

// find is

let str3 = "This is an string and is an example";

// let j = 0;
let sum = 0;

for(let i=0;i < str3.length;i++)
{
    let k = str3.indexOf('is');
    sum++;
    console.log(k);
    str3 = str3.substring(k+2,str3.length);

}
console.log("Frequency ");
console.log(sum);

// slice method

console.log(str3.slice(0,4));

// substring





