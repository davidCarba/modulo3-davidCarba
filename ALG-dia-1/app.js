function Profesor(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

const profesor1 = new Profesor("Manolo", 69);
console.log(profesor1.nombre);
