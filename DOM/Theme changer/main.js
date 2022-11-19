
/*
const themeColors = document.querySelector('[name = "theme"]');


// store themes

const storeTheme = function(theme)
{
    localStorage.setItem('theme',theme);
}

const applyTheme = function()
{
    const activeTheme = localStorage;
    getItem('theme');

    themeColors.forEach((themeOption) =>
    {
        if(themeOption === activeTheme)
        {
            themeOption.checked = true;
        }


    })

    // if(themeOption === activeTheme)
    // {
    //     themeOption.checked = true;
    // }

}

themeColors.forEach((themeOption) =>
{
    themeOption.addEventListener('click',() =>{

        storeTheme(themeOption.id);
    })
})


document.onload = applyTheme();

*/



var form = document.getElementById('addForm');

var itemList = document.getElementById('items');


form.addEventListener('submit',addEvent)
itemList.addEventListener('click',addEvent);


function addEvent(e)
{

    e.preventDefault();
    var item = document.getElementById('main-input').value;

    // console.log(item);


    var newItem = document.createElement('li');

    newItem.className = 'list-group-item';

    newItem.appendChild(document.createTextNode(item));

    console.log(newItem);


    deleteBtn.className='btn-btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    newItem.appendChild(deleteBtn);

    itemList.appendChild(newItem);

}


function removeEvent(e){
    if(e.target.contains('delete'))
    {
        if(confirm('delete karna hai?'))
        {
            var li = e.target.parentElement;

            itemList.removeChild(li);
        }
    }
}