class Product {
  name;
  price;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  #total = 0;
  #products = [];

  addProduct(product, qty) {
    this.#products.push({
      product,
      qty,
    });
  }

  setTotal(value) {
    if (typeof value !== "number") {
      throw new Error("Total should be a number");
    }

    this.#total += value;
  }

  addToCart(product, qty) {
    if (!(product instanceof Product)) {
      throw new Error("Product should be an instance of Product");
    }

    if (typeof qty !== "number") {
      throw new Error("Qty should be a number");
    }

    this.addProduct(product, qty);
    this.setTotal(product.price * qty);
  }

  getTotal() {
    return this.#total;
  }

  checkout() {
    return {
      total: this.#total,
      products: this.#products,
    };
  }
}

const currentTransaction = new Transaction();

const oreo = new Product("Oreo", 2500);
currentTransaction.addToCart(oreo, 2);

const goodtime = new Product("Good Time", 2000);
currentTransaction.addToCart(goodtime, 3);

const yupi = new Product("Yupi", 6000);
currentTransaction.addToCart(yupi, 1);

const total = currentTransaction.getTotal();
const checkedOut = currentTransaction.checkout();

console.log("Total:", total);
console.log("Checked Out:", checkedOut);
console.log(checkedOut.products);
