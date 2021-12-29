

//VAR APP


var app= new Vue({
    el:'#app',
        data: { 
        cart: JSON.parse(localStorage.getItem("cart")),
        products: boardgames,
    imagePath: './assets/images/',
    lastClickedId: localStorage.getItem("lastId"),
    isActive: false,  
    },



    methods:{
        updateCart(id){
          this.cart.push(id);
          localStorage.setItem("cart", JSON.stringify(this.cart))
         
        },
        deleteFromCart(id){
            this.cart.splice(id, 1)
            localStorage.setItem("cart", JSON.stringify(this.cart))
            
        },
        deleteFromTotal(id){
            this.cartPrice.splice(id, 1)
        },
        saveLastId(id){
        this.lastClickedId = id;
        localStorage.setItem("lastId",this.lastClickedId)
        },
        
    },
    computed:{
        arraySum(){
          let total=0;
          let newString= this.cart.map (i=> this.products[i].price)
            for(let j=0; j<newString.length; j++){
                 total =total + newString[j] 
              }
          return total.toFixed(2)}}

})
