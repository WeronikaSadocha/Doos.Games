let bob= [];

if (JSON.parse(localStorage.getItem("cart")) == null) {

     localStorage.setItem("cart", JSON.stringify(bob))
}


if(JSON.parse(localStorage.getItem("uniqueProducts"))==null){

     localStorage.setItem("uniqueProducts", JSON.stringify(bob))
}