const { applyDiscount } = require("./discount");

class Cart {
  constructor() {
    this.items = [];
  }

  add(product, quantity = 1) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero");
    }

    const existing = this.items.find(
      item => item.product.id === product.id
    );

    if (existing) {
      existing.quantity += quantity;
      return;
    }

    this.items.push({
      product,
      quantity
    });
  }

  remove(productId) {
    this.items = this.items.filter(
      item => item.product.id !== productId
    );
  }

  clear() {
    this.items = [];
  }

  itemCount() {
    return this.items.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  }

  subtotal() {
    return this.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }

  total(discount = 0) {
    return applyDiscount(
      this.subtotal(),
      discount
    );
  }
}

module.exports = Cart;