
// let person = {
    // name : 'john',
    // age : 24
// }
// 
// person = null;
// 
// console.log(person.name);


/* Garbage Collection

    1 - > Global Variables
    2 - > Functions still to execute
    3 - > 


    Prototypes -> It is mechanism through which objects
                  can inherit property of one another.

    
    Object Prototype -

    1) Array Prototype
    2) 



*/

let person = {
    firstName : 'john',
    age : 24
}


let p1 = Object.create(person);

console.log(p1);

console.log(p1.age);

let p2 = {

    lastName : 'doe',
    __proto__ : person
}

console.log(p1.age);


// Array Prototype

let arr =[1,2,3,4,5];

console.log(arr.__proto__);

console.log(arr.__proto__ == Array.prototype);