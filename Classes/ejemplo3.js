class Profesor {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  soyElProfe() {
    console.log("Soy el profe: " + this.nombre);
  }
  get edadMinima() {
    return 12;
  }
  get edad() {
    return this._edad;
  }
  set edad(value) {
    if (value < this.edadMinima) {
      console.log("Demasiado joven para ser profesor");

      return;
    }
    this._edad = value;
  }
  static crearProfesorBot() {
    return new this("BotPaco", 99);
  }
}

const profesor = new Profesor("Manolo", 8);
console.log(profesor.edad);
console.log(profesor.edadMinima);
console.log(profesor._edad);
profesor.edad = 11;

const profesorBot = Profesor.crearProfesorBot();
profesorBot.soyElProfe();
