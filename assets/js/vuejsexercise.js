var app= new Vue({
    el:'#app',
    data:{
        product:  [
            {id: 0,
            name: 'Arkham',
            price: 54.99,
            image: 'arkham.jpg',
            stock:20,
            
        },
        {
            id: 1,
            name: 'Wingspan',
            price: 39.99,
            image: 'wingspan.jpg',
            stock: 4,
        },
        {   
            id: 2,
            name: 'Brass Birmingham',
            price: 69.99,
            image:'brass.jpg',
            stock: 5,
        },
        {
            id: 3,
            name: 'Everdell',
            price: 52.90,
            image: 'everdell.png',
            stock: 10,
        },
        {
            id: 4,
            name: 'Duel',
            price: 19.99,
            image:'duel.jpg',
            stock:15,
        },
        { 
            id: 5,
            name: 'Root',
            price: 54.80,
            image:'root.jpg',
            stock:8,
        },
        {
            id:6,
            name: 'Terraforming  Mars',
            price:59.99,
            image: 'teraformingmars.jpg',
            stock:25,
        },
        {
            id:7,
            name:'Scythe',
            price:59.99,
            image: 'scythe.jpg',
            stock:13,
        },
        {
            id:8,
            name:'Azul',
            price: 29.90,
            image:'azul.jpg',
            stock:18,
    
        },
        {
            id:9,
            name: 'Terra Mystica',
            price: 69.99,
            image:'terramistica.jpg',
            stock:3,
        },
    ]

    }
})

Vue.component('product', {
    data: function () {
        return {
            
        }
    },

    props: [products],
    
    template: `
        <div class="card">
            <img :src="imagePath + fruit_data.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ fruit_data.name }}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>Stock: {{ fruit_data.stock }}</p>
                <button class="btn btn-primary" :disabled="fruit_data.stock === 0" @click="addToCart(fruit_data.id)">Order</button>
            </div>
        </div>`,
})
