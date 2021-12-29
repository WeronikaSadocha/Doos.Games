Vue.component('products', {
    template:
    `<div class= "grid-wrapper"> <div v-for="product in products" class="card" style="width: 18rem;">
    <a v-on:click="goToPage(product.id)" href="Arkham.html"> <img  :src="imagePath + product.image" class="card-img-top" alt="..."></a>
     <div class="card-body">
       <h5  class="card-title">{{ product.name }}</h5>
       <p class="card-text">{{product.description.substr(0, 140) +"..."}}</p><ul class= buy><div class=pricetag>{{product.price}} </div>
       <div class = "importantbutton" ><button v-on:click="addToCart(product.id) " >Buy</button></div></ul>
     </div></div></div>`,
    
     data(){return   {products: boardgames,
        imagePath: './assets/images/',
        
    }},
    methods:{
      
        addToCart(id) {
           this.$emit('add-to-cart',id)
        },

        goToPage(id){
          this.$emit('go-to-page',id)
        },

    }
    })
    
    