
console.dir(document);


console.log(document.domain);

console.log(document.URL);

console.log(document.body);

console.log(document.head);

console.log(document.links);

console.log(document.all);

// document.all[5].textContent = 'hello';

// get element by ID

let header = document.getElementById('header-title');

header.style.backgroundColor = 'green';               


header.innerText = '123';

header.innerHTML = "<h3> THis is a H3 heading </h3>";

console.log(header);

// GET ELEMENT BY CLASS-NAME

let items = document.getElementsByClassName('list-group-item');

// val.style.backgroundColor = 'yellow';

// console.log(items);

// for(let i=0; i< items.length ;i++)
// {
//     items[i].style.backgroundColor = 'lightgrey';

//     Object.assign(items[i].style,{color:'orange',fontWeight:'bold'})

// }

// GET ELEMENT BY TAG NAME


let items1 = document.getElementsByTagName("li");

console.log(items1);

for(let i=0; i< items1.length ;i++)
{
    items1[i].style.backgroundColor = 'green';

    Object.assign(items1[i].style,{color:'red',fontWeight:'bold'})

}



// GET ELEMENT BY QUERRY SELECTOR

