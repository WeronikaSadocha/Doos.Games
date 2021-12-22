

//VAR APP


var app= new Vue({
    el:'#app',
        data: { 
        cart: JSON.parse(localStorage.getItem("cart")),
        products: boardgames,
    imagePath: './assets/images/',
    lastClickedId: localStorage.getItem("lastId") ,  
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

})
