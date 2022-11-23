

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false";


const xhr = new XMLHttpRequest;


xhr.onload = function()
{
    let data = this.response;


}


xhr.onerror = function()
{

}

xhr.open("GET",url);