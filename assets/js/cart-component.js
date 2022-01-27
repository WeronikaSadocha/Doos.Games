// CART COMPONENT
Vue.component('cart',{
    template:
    `
<div> 
    <div class= "cart-items" :class="{toggle:!isActive}">
        <span class=closeButtonBasket @click="isActive=!isActive" > &times;</span>
        <p class= "BasketTitle">Your Basket</p>
        <div class="container">
            <table class="table table-hover table-dark">
                <tbody>
                    <div id= "background-to-empty-basket"v-if=" cart.length < 1"> You haven't add anything to your basket!</div>
                    <tr v-for="product in cart_no_repetition">
                        <td>{{products[product].name}}</td>
                        <td>{{products[product].price}}</td>
                        <td class="delete-item" v-on:click="
                            deleteFromCart(product);
                            decrement(products[product].id);
                            deleteFromCartNoRep(cart_no_repetition.indexOf(product))">-</td>
                        <td class="product-quantity">{{products[product].quantity}}</td>
                        <td class="delete-item" v-on:click=" addToCart(cart_no_repetition.indexOf(product))">+</td>
                    </tr>
                </tbody>
            </table> 
           

        <p v-if=" cart.length > 0"> The total price is: {{arraySum}}</p>

    </div>

        <a v-if=" cart.length > 0" href="check-out.html"><button class=checkOutButton> Check out</button></a>

    </div> 


    <nav class="navbar ">
        <a class="navbar-brand" href="index.html">
            <img src="assets/images/doos.png"  class="d-inline-block align-top image-margin" alt="">
        </a>
        <ul class="inlineblock-list">
            <li class= "listnav"> 
                <a href="contact.html"> Contact</a>
            </li>
            <li class= "listnav"><a>About Us</a></li>
        </ul>
          <div class="basket"> 
              <div id="amount-in-basket" v-if=" cart.length > 0">{{cart.length}}</div>
                <svg @click="isActive=!isActive" 
                xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-basket3-fill" viewBox="0 0 16 16">
                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
                </svg>
            </div>
    </nav>

</div>
   `,



data() {
  return {
    imagePath: './assets/images/',
    isActive:false,
  }

},

props: {
  cart:{
    type:Array,
    required:true
  },
  products:{
    type: Array,
    rquired:true
  },
  cart_no_repetition:{
    type:Array,
    required:true
  },   
},


methods: {
  deleteFromCart(item) {
    this.$emit('delete-from-cart',item)
  },

  deleteFromTotal(id) {
    this.$emit('delete-from-total',id)
  },

  addToCart(id) {
    this.$emit('cart-plus',id)
  },

  decrement(id) {
    this.$emit('cart-minus',id)
  },

  deleteFromCartNoRep(id){
    if (this.products[this.cart_no_repetition[id]].quantity < 1){
      this.cart_no_repetition.splice(id, 1)}

    localStorage.setItem("uniqueProducts",JSON.stringify(this.cart_no_repetition))
  },
},

computed: {
  arraySum(){
    let total=0;
    let newString= this.cart.map (i=> this.products[i].price)
    for(let j=0; j<newString.length; j++){
      total =total + newString[j] 
    }
    return total.toFixed(2)
  },
}

})



