
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

// CART COMPONENT----------------------------------------
Vue.component('cart',{
    template:`<table class="table table-hover table-dark">
    <thead>
    </thead>
    <tbody>
     
      <tr v-for="product in cart">
        <td>{{products[product].name}}</td>
        <td>{{products[product].price}}</td>
        <td class="delete-item" v-on:click=" deleteFromCart(cart.indexOf(product)); deleteFromTotal(cartPrice.indexOf(product))">&times</td>
      </tr>
    
    </tbody>
  </table> `,

  data(){
      return {
        products: boardgames,
    imagePath: './assets/images/',
    cartPrice:[],
 }
 
  },
 props: {
     products:{
         type:Array,
         required:true
     },
     cart:{
         type:Array,
         required:true

     },
 },
 methods:{
 deleteFromCart(id) {
    this.$emit('delete-from-cart',id)
 },

 deleteFromTotal(id) {
    this.$emit('delete-from-total',id)
},


}})





//VAR APP
var app= new Vue({
    el:'#app',
        data: { 
        cart: [],
        products: boardgames,
    imagePath: './assets/images/',
    cartPrice:[],
    
   
    },
    methods:{
        updateCart(id){
          this.cart.push(id);
          this.cartPrice.push(this.products[id].price);
        },
        deleteFromCart(id){
            this.cart.splice(id, 1)
        },
        deleteFromTotal(id){
            this.cartPrice.splice(id, 1)
        }
    },
    computed:{
        arraySum(){
            let total=0;
            for(let i=0; i< this.cartPrice.length;i++){
                total= total + this.cartPrice[i]
            }
            return total.toFixed(2)
        }
    }

})

