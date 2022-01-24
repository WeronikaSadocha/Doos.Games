


var app= new Vue({
    el:'#app',
        data: { 
    // DATA STORAGE

        cart: JSON.parse(localStorage.getItem("cart")),
        cart_no_repetition: JSON.parse(localStorage.getItem("uniqueProducts")),
        products: boardgames,
        messages:[],

        isActive: false, 
        imagePath: './assets/images/',
        lastClickedId: localStorage.getItem("lastId"),
    
        message:{
            subject: null,
            email: null,
            message_content: null,
            },
        errors:[],

        addedProduct:""
},

mounted(){
    if (this.cart.length>0){
        this.products= JSON.parse(localStorage.getItem("saveProducts"))
    }

},

    methods:{
        updateCart(id){
          this.cart.push(id);
          this.products[id].quantity= this.products[id].quantity + 1
          localStorage.setItem("cart", JSON.stringify(this.cart))
          localStorage.setItem("saveProducts",JSON.stringify(this.products))

          let unique = {};
          this.cart.forEach(function(i) {
            if(!unique[i]) {
              unique[i] = true;
            }
          });
          this. cart_no_repetition = Object.keys(unique);
          localStorage.setItem("uniqueProducts",JSON.stringify(this.cart_no_repetition))
        },
        
        plusToCart(id){
            
           let addedProduct= this.cart_no_repetition.slice(id, id+1)
           let addedProductNum = parseInt(addedProduct[0])
           this.cart.push(addedProductNum)

           this.products[addedProductNum].quantity= this.products[addedProductNum].quantity + 1

           localStorage.setItem("cart", JSON.stringify(this.cart))
           localStorage.setItem("saveProducts",JSON.stringify(this.products))
           
        },
        deleteFromCart(item){
            itemNum= parseInt(item)
            const index = this.cart.indexOf(itemNum);
            if (index > -1) {
             this.cart.splice(index, 1);
                }
            localStorage.setItem("cart", JSON.stringify(this.cart))
           },
        
        decrement(id){
            if (this.products[id].quantity > 0){
            this.products[id].quantity= this.products[id].quantity - 1 }

            else{this.products[id].quantity=0}

            localStorage.setItem("saveProducts",JSON.stringify(this.products))
        },

    
        saveLastId(id){
        this.lastClickedId = id;
        localStorage.setItem("lastId",this.lastClickedId)
        },

        addMessage(){ 
           
            let savedUserMessage= {
                subject: this.message.subject,
                email: this.message.email,
                message_content:this.message.message_content,}

            this.messages.push(savedUserMessage)

            this.message.subject=null
            this.message.email=null
            this.message.message_content=null}
        
        
    },

    computed:{
        arraySum(){
          let total=0;
          let newString= this.cart.map (i=> this.products[i].price);
          
            for(let j=0; j<newString.length; j++){
                 total =total + newString[j] 
              }
          return total.toFixed(2)}},

})


