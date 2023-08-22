let total = 0;

function handleOnClick(){
  const cardItemText = getCardItemsText('spoons')
  console.log(cardItemText)
}

function addingShopingItem(cardItemsText, cardItem){
  console.log()
}


function getCardItemsText(cardItemsTexts){
  const cardItemsTextsContainer = document.getElementById(cardItemsTexts);
  const cardItemsText = cardItemsTextsContainer.innerText;
  return cardItemsText;
}
function getCardItemsPriceText(cardItemsPrices){
  const cardItemsPricesContainer = document.getElementById(cardItemsPrices);
  const cardItemsPricesText = cardItemsPricesContainer.innerText;
  const cardItemsPrice = cardItemsPricesText;
  return cardItemsPrice;
}

// set reusable innerText
function setElementInnerText(elementId, cardItem){
  const element = document.getElementById(elementId);
  element.innerText = cardItem;
}
function addToShopingItems(){
  console.log('adding soon');
}