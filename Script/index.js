let bagItems ;
 onLoad();


function onLoad(){
    let bagItemStr = localStorage.getItem('bagItems');
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayItemOnHomePage();
    displayBagIcon();
}

function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}   
 function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if ( bagItemCountElement){
         bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerHTML = bagItems.length;
 } else{
        bagItemCountElement.style.visibility = 'hidden';

 }  
}
function displayItemOnHomePage(){
   let itemsContainerElement = document.querySelector(".items-container");
   if(! itemsContainerElement ){
       return;
   }
   let innerHTML = '';
    items.forEach(item =>{
       innerHTML +=  ` <div class="item-container">
                <img class = "item-image" src="${item.image}" alt="item Image">
                <div class="rating">
                    ${item.rating.stars} ⭐ | ${item.rating.count}
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                     <span class="current-price">RS ${item.current_price}</span>
                     <span class="original-price">RS  ${item.original_price}</span>
                     <span class="discount">{${item.discount_percentage}% off}</span>


                </div>
                <button class="btn-add-bag" 
                onClick = "addToBag(${item.id})">Add to bag</button>
            </div>
            ` 
});
itemsContainerElement.innerHTML = innerHTML;

}
   
   
   
   
   
   
   

