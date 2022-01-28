Vue.component('products', {
    template:
    ` 
<div>
<div id= simpleModal class = Weronikamodal  :class="{toggle:!isActive, fadeInImage:isActive}" >
		<div class= IsmodalContent>
			<span class=closeButton v-on:click="closeModal"> &times;</span>
			<div class= "userAdd">
          You just added 
            <span style="color:#F24501;font-weight:bolder">
              {{lastClickedProduct}}
            </span>
          to your basket!
      </div>
			<div class = options> 
				<a href="check-out.html">
            <div class= "toTheBasket">Go to check-out...</div>
        </a>
				<button class=shopFuther v-on:click="closeModal">Shop futher</button>
			</div>
		</div>
</div>
<div class= "grid-wrapper"> 
    <div v-for="product in products" class="card" style="width: 18rem;">
        <a v-on:click="goToPage(product.id)" href="game-info.html"> <img  :src="imagePath + product.image" class="card-img-top" alt="..."></a>
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{product.description.substr(0, 140) +"..."}}</p>
            <ul class= buy>
                <div class=pricetag>{{product.price}}</div>
                <div class = "importantbutton" >
                    <button v-on:click="addToCart(product.id); lastClicked(product.id)">Buy</button>
                </div>
            </ul>
         </div>
    </div>   
</div>
</div>

  `,
    
data() {
  return {
    products: boardgames,
    imagePath: './assets/images/',  
    lastClickedProduct:'',
    isActive: false,
  }
},

methods:{
  addToCart(id) {
    this.$emit('add-to-cart',id)
  },

  goToPage(id){
    this.$emit('go-to-page',id)
  },
  lastClicked(id){
    this.lastClickedProduct= this.products[id].name
    this.isActive=true
  },
  closeModal(){
    this.isActive=false
  }

}

})
    
    