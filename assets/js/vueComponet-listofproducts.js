
Vue.component('products', {
template:
`<div class= "grid-wrapper"> <div v-for="product in products" class="card" style="width: 18rem;">
<a href="Pages/games/Arkham.html"> <img :src="imagePath + product.image" class="card-img-top" alt="..."></a>
 <div class="card-body">
   <h5 class="card-title">{{ product.name }}</h5>
   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><ul class= buy><div class=pricetag>{{product.price}} </div>
   <div class = "importantbutton" ><button v-on:click="addToCart(product.id) " >Buy</button></div></ul>
 </div></div>`,

 data(){return   {products: boardgames,
    imagePath: './assets/images/',
    
}},
methods:{
    addToCart(id) {
       this.$emit('add-to-cart',id)
    }
}

})

var app= new Vue({
    el:'#app',
        data: { 
        cart: [],
        products: boardgames,
    imagePath: './assets/images/',
    cartProducts:[],
    cartPrice:[]
   
    },
    methods:{
        updateCart(id){
          this.cart.push(id);
          this.cartProducts.push(this.products[id].name);
          this.cartPrice.push(this.products[id].price);
        }
    }

})

