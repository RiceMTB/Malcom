/***********************
Async Function: getBitCoinPrice
Created/By: 9 Aug 23 Rice
Description: Returns data from API
************************/
const coinDeskAPI = 'https://api.coindesk.com/v1/bpi/currentprice.json'

async function getBitCoinPrice() {
  try {
        const response = await fetch(coinDeskAPI)
        .then(response => response.json())
        return response
  }
  catch (err) {
      console.error(err)
      // ... error checks https://codedamn.com/news/javascript/javascript-async-await-error
    }
}

function bitcoinOut(myFullData){
  var outData = {
    'updated': "",
    'price': ""
  }
  try { 
    if ('time' in myFullData){ 
      if ('updated' in myFullData.time){
        outData.updated = myFullData.time.updated;
      }; //END if
    }; //END if
    if ('bpi' in myFullData){ 
      if ('USD' in myFullData.bpi){
        outData.price = "$ " + myFullData.bpi.USD.rate;
      }; //END if
    }; //END if
} //END TRY
catch(err){
  console.error(err)
}
return outData






}
  module.exports = {
    bitconPrice: getBitCoinPrice,
    bitconOutData: bitcoinOut
  }


