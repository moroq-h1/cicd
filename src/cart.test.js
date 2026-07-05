const Cart = require("./cart");
const Product = require("./product");

describe("Cart", () => {
  let cart;
  let keyboard;
  let mouse;

  beforeEach(() => {
    cart = new Cart();

    keyboard = new Product(
      1,
      "Keyboard",
      50
    );

    mouse = new Product(
      2,
      "Mouse",
      20
    );
  });

  test("starts empty", () => {
    expect(cart.itemCount()).toBe(0);
    expect(cart.subtotal()).toBe(0);
  });

  test("adds products", () => {
    cart.add(keyboard);

    expect(cart.itemCount()).toBe(1);
    expect(cart.subtotal()).toBe(50);
  });

  test("adds quantity", () => {
    cart.add(keyboard, 3);

    expect(cart.itemCount()).toBe(3);
    expect(cart.subtotal()).toBe(150);
  });

  test("combines duplicate products", () => {
    cart.add(keyboard);
    cart.add(keyboard, 2);

    expect(cart.itemCount()).toBe(3);
    expect(cart.items).toHaveLength(1);
  });

  test("removes products", () => {
    cart.add(keyboard);
    cart.add(mouse);

    cart.remove(1);

    expect(cart.itemCount()).toBe(1);
    expect(cart.items[0].product.name).toBe("Mouse");
  });

  test("clears cart", () => {
    cart.add(keyboard);
    cart.add(mouse);

    cart.clear();

    expect(cart.itemCount()).toBe(0);
  });

  test("calculates subtotal", () => {
    cart.add(keyboard, 2);
    cart.add(mouse, 3);

    expect(cart.subtotal()).toBe(160);
  });

  test("applies discount", () => {
    cart.add(keyboard, 2);

    expect(cart.total(10)).toBe(90);
  });

  test("throws for invalid quantity", () => {
    expect(() => {
      cart.add(keyboard, 0);
    }).toThrow();
  });

  test("throws for invalid discount", () => {
    cart.add(keyboard);

    expect(() => {
      cart.total(120);
    }).toThrow("Invalid discount percentage");
  });
});