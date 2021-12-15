
// //PRODUCTS
// let boardGames = [
//     {
//         name: 'Arkham',
//         price: 54.99,
//         id: 0,
//         delete:'X'
//     },

//     {
//         name: 'Wingspan',
//         price: 39.99,
//         id: 1,
//         delete: 'X'
//     },
//     {   
//         name: 'Brass Birmingham',
//         price: 69.99,
//         id: 2,
//         delete:'X'

//     },
//     {
//         name: 'Everdell',
//         price: 52.90,
//         id: 3,
//         delete:'X'
//     },
//     {
//         name: 'Duel',
//         price: 19.99,
//         id: 4,
//         delete:'X'
//     },
//     {
//         name: 'Root',
//         price: 54.80,
//         id: 5,
//         delete:'X'
//     },
//     {
//         name: 'Terraforming  Mars',
//         price:59.99,
//         id:6,
//         delete:'X'
//     },
//     {
//         name:'Scythe',
//         price:59.99,
//         id:7,
//         delete:'X'
//     },
//     {
//         name:'Azul',
//         price: 29.90,
//         id:8,
//         delete:'X'
//     },
//     {
//         name: 'Terra Mystica',
//         price: 69.99,
//         id:9,
//         delete:'X'
//     }
//     ];
// //MODAL 
// const weronikaModal= document.querySelector('.Weronikamodal');
// const buycButton = document.querySelectorAll('.importantbutton');
// const closeModalWindow= document.querySelector('.closeButton');
// const shopFuther = document. querySelector('.ShopFuther')

// //EVENTS
// buycButton.forEach(box => {
//     box.addEventListener('click', openMyModal);
//   });

// closeModalWindow.addEventListener('click', closeButton);

// shopFuther.addEventListener('click', closeButton) 

// // FUNCTIONS FOR MODAL
// function openMyModal() {
//     weronikaModal.style.display='block';
// }

// function closeButton (){
//     weronikaModal.style.display='none';
// }


// //----------------------------------------------------------------------

// //Modal Box content

// let cardTitle = document.querySelectorAll('.card-title');
// let addToTheBasket = document.querySelector('.UserAdd');

// let buttonClick = document.querySelectorAll('.addToCard');
// buttonClick.forEach(box => {
//     box.addEventListener('click', function(){
//        let productId = this.getAttribute('product_id');
//        addToTheBasket.innerText='You just added ' + boardGames[productId].name + ' to your basket!'
//     });
//   });

// // ----------------------------------------------------------------------
// // ADD TO THE BASKET OPTION
// let cartitems=[]
// let cartItemsFromTheStorage = JSON.parse(window.localStorage.getItem('values'))
// let pricelist=[]
// let deleteButton =[]
// let ol= document.querySelector('.bello');
// const price= document.querySelector('.price');
// let basket = document.querySelector('.cart-items');

// buttonClick.forEach(item=>{
//     item.addEventListener('click', function(){
//             let productId = this.getAttribute('product_id') ;
//            cartitems= cartitems.concat([boardGames[productId].name])
//            pricelist= pricelist.concat([boardGames[productId].price])
//            deleteButton= deleteButton.concat([boardGames[productId].delete])
           
// ol.prepend("\n" + cartitems[cartitems.length-1]+" for  " + pricelist[pricelist.length-1]+"EURO");

// window.localStorage.setItem('values', JSON.stringify(cartitems));



// let totalAmount= document.querySelector('.totalAmount');
// function getArraySum(a){
//     var total=0;
//     for(var i in a) { 
//         total += a[i];
//     }
//     return total.toFixed(2);
// }
// totalAmount.innerText=" IN TOTAL: " + getArraySum(pricelist) + " EURO";

// }); 
// })



// //Delete From the basket button
// let deleteFromTheCard= document.querySelector('.delateLastProduct');

// deleteFromTheCard.addEventListener('click', function()
// {if(ol.firstChild ===null){
//     console.log('there is nothing in the basket')
// }
// else{ol.firstChild.remove()};
// cartitems.pop();
// pricelist.pop();
// function getArraySum(a){
//     var total=0;
//     for(var i in a) { 
//         total += a[i];
//     }
//     return total.toFixed(2);
// }
// let totalAmount= document.querySelector('.totalAmount');
// totalAmount.innerText=" IN TOTAL: " + getArraySum(pricelist) + " EURO"
// });

    
// //-----------------------------------------------------------------------



// //Search Bar
// let searchBar = document.querySelector('.search');
// let lupa = document.querySelector('.glass');
// let toggleSearchStatus = false

// lupa.addEventListener('click', toggleMenu) 

// function toggleMenu(){
// if (searchBar.style.display==='flex'){
//    searchBar.style.display='none'}
// else {searchBar.style.display='flex'}
// }


// //----------------

// let basketIcon= document.querySelector('.basket')

// let closeButtonBasket=document.querySelector('.closeButtonBasket')
// basketIcon.addEventListener('click',toggleCard)

// function toggleCard(){if (basket.style.display==='block'){
//     basket.style.display='none'}
//  else {basket.style.display='block'}
//  }

//  closeButtonBasket.addEventListener('click', closebasket);
//  function closebasket (){
//     basket.style.display='none';
// }