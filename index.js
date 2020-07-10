var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

var addToCart= name =>{
  var obj={itemName: name,
           itemPrice: Math.floor(Math.random()*100)
  }
  cart.push(obj)
  return `${name} has been added to your cart.`
}

var viewCart= () =>{
  if(cart[0]==="null"){
    return `Your shopping cart is empty.`
  }
  else{
    var str=[]
    for(let i=0; i<cart.length; i+=1){
      if(i===(cart.length-1)){

      }
    }
  }
}
