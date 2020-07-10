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
  if(cart.length===0){
    return `Your shopping cart is empty.`
  }
  else{
    var str="In your cart, you have "
    for(let i=0; i<cart.length; i+=1){
      if(i===(cart.length-1) && cart.length!=1){
        str+=`and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
      else{
        if(cart.length===1){
          str+=`${cart[i].itemName} at $${cart[i].itemPrice}.`
        }
        else{
          str+=`${cart[i].itemName} at $${cart[i].itemPrice}, `
        }
      }
    }
    return str;
  }
}

var total= () =>{
  return (cart.length)
}
