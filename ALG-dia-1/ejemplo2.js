//ejemplo 2

class Producto {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const producto1 = new Producto("Movil", 1000);
console.log(producto1.price);

class Book extends Producto {
  constructor(name, price, author) {
    super(name, price);
    this.author = author;
  }
}

const producto2 = new Book("Aventuras locas", 13, "David Carballal");
console.log(producto2.author);

class Basket {
  constructor() {
    this.products = [];
  }
  addProduct(amount, product) {
    this.products.push(...Array(amount).fill(product));
  }
  calcTotal() {
    return this.products
      .map(product => product.price)
      .reduce((a, b) => a + b, 0);
  }
  printShoppingInfo() {
    console.log("El total a pagar: " + this.calcTotal());
  }
}

const bread = new Producto("Bread", 1);
const water = new Producto("Water", 0.25);
const faust = new Book("Faust", 12.5, "Yo");
const basket = new Basket();
basket.addProduct(2, bread);
basket.addProduct(3, water);
basket.addProduct(1, faust);
basket.printShoppingInfo();
