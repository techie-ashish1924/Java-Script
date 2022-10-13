let str1 = "This is a div class"

let first_list = str1.split(' ');
let first = first_list[0];

console.log(first);

let r_string = "";

for(let i=first.length-1;i>=0;i--)
{
    r_string = r_string + first[i];
}
console.log(r_string);

first_list[0] = r_string;

console.log(first_list);

// let final_string = "";

// for(let i=0;i<first_list.length;i++)
// 
// {
    // final_string = final_string + first_list[i];
// }

let final_string = first_list.join(" ");
console.log(final_string);



