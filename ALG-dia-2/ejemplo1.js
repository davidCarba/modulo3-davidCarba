class Poligono {
  constructor(name, sides) {
    this.name = name;
    this.sides = sides;
  }
  getArea() {}
}

class Triangulo extends Poligono {
  constructor(base, height) {
    super("Triangulo", 3);
    this.base = base;
    this.height = height;
  }
  getArea() {
    return (this.base * this.height) / 2;
  }
}

class Circulo extends Poligono {
  constructor(radius) {
    super("Circulo", 1);
    this.radius = radius;
  }
  getArea() {
    return Math.PI * (this.radius * this.radius);
  }
}

class Paralepipedo extends Poligono {
  constructor(base, height) {
    super("Paralepipedo", 4);
    this.base = base;
    this.height = height;
  }
  getArea() {
    return this.base * this.height;
  }
}

class Cuadrado extends Paralepipedo {
  constructor(base) {
    super(base, base);
    this.name = "Cuadrado";
  }
}

const triangulo = new Triangulo(2, 4);
console.log(triangulo);
const circulo = new Circulo(4);
console.log(circulo);
const paralepipedo = new Paralepipedo(4, 5);
console.log(paralepipedo);
const cuadrado = new Cuadrado(2);
console.log(cuadrado);
console.log(triangulo.getArea());
console.log(circulo.getArea());
console.log(paralepipedo.getArea());
console.log(cuadrado.getArea());
