
// Arrays

// let arr = new Array(5);

// console.log(arr);

// We can input multiple type data in array in java script

// let arr2 = [1,2,3,4,5,6,"Ashish",true];
// ,function(){alert ('hello world')
// console.log(arr2);

// console.log("element at index 2 is : ", arr2[2]);
// console.log(arr2[8]())

// console.log(arr2.pop());

// console.log(arr2);

// we can push multiple value at a time in array

// arr2.push(100);

// console.log(arr2);

// arr2.push(200,300);
// console.log(arr2);
// console.log(arr2.push(100,200));

// shift function in array

// arr2.shift()
// arr2.shift(800);
// console.log(arr2);


// unshift function in array

// arr2.unshift('rishabh')

// console.log(arr2);



// Extra

// let arr3 = [];

// arr3[255] = 1;
// console.log(arr3);
// console.log(arr3.length);

//



// console.log([2] == [2]);

// 2 D array

let arr = [

    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(arr);

console.log(arr[1][1]);
let sum = 0;
for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr[0].length;j++)
    {
        console.log("[",i,",",j,"]");
        sum = sum + arr[i][j];
    }
}

console.log("sum is ", sum);

console.log("Array flatter ..................")

let arr1 = [];
let ind = 0;
for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr[0].length;j++)
    {
        arr1[ind] = arr[i][j];
        ind++;
    }
}

console.log(arr1);


// slice method 

let arr5 = ['mango','apple','banana']
console.log(arr5.slice(0,2));
console.log(arr5);
arr5.splice(2,0,'grapes')
console.log(arr5);

// for each loop

arr.forEach(alert)

