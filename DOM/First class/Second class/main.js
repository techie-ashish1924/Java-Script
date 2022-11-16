/*

var itemList = document.getElementById('items');

console.log(itemList.parentNode);

Parent element

itemList.parentNode.style.backgroundColor = 'lightgrey';

console.log(itemList.parentElement);

CHILD NODES

 console.log(itemList.childNodes);

 console.log(itemList.children);

 itemList.children[1].style.backgroundColor = 'yellow';

 console.log();  
 
 EVENTS


function butt

var button = document.querySelector('#btn');

button.addEventListener('click',addEvent);

function addEvent(e)
{
    console.log(e);
    console.log(e.target);

    console.log(e.value);

    console.log(e.clientX);

    console.log(e.clientY);

    console.log(e.offsetX);

    console.log(e.offsetY);

    console.log(e.ctrlKey);

    console.log(e.altKey);

    console.log(e.shiftKey);
     var mainTitle = document.getElementsByClassName('main-title');

     console.log(title);
     title.style.textcontent = 'changed';
}

*/

var form = document.getElementById('addForm');

var button = document.querySelector('#btn');

button.addEventListener('click',runEvent);

function runEvent(e)
{

  
    console.log("Event type : "+e.type);
    // e.preventDefault();
    // console.log('1');
}


function Work()
{
    var data = getElementById('addForm');
    
}