// CART COMPONENT
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

