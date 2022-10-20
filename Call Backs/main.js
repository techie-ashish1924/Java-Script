// Call backs 

/*  
    fi()
    {
        after doing some work - w1

        f2() - > call back.
    }

*/

function print(val)
{
    console.log(val);
}

function add(n1,n2,print)
{
    let sum = n1 + n2;
    // return sum;

    print(sum);
}


add(2,3,print);

// extra 

/*  function add(n1,n2)
{
    let sum = n1 + n2;
    // return sum;

    print(sum);
}


add(2,3);    */

