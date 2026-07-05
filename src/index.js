const Cart = require("./cart");
const Product = require("./product");

const cart = new Cart();

cart.add(new Product(1, "Keyboard", 50), 2);
cart.add(new Product(2, "Mouse", 20));

console.log(cart.itemCount());
console.log(cart.subtotal());
console.log(cart.total(10));