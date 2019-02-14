//ejermplo 1

function Profesor(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

const profesor1 = new Profesor("Manolo", 69);
console.log(profesor1.nombre);
profesor1.nombre = "Manolito";
Profesor.prototype.soyElProfe = function() {
  console.log("Soy el profe " + this.nombre);
};

profesor1.soyElProfe();

const profesor2 = new Profesor("Pedro", 32);

profesor2.soyElProfe();

Profesor.prototype.cumple = function() {
  console.log("Ahora tienes " + (this.edad + 1));
};

profesor1.cumple();
profesor2.cumple();
