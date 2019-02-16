class Spaceship {
  constructor(name) {
    this.damage = 0;
    this.shield = 0;
    this.name = name;
    this.shoots = 0;
    this.status = "active";
  }
  selectObjective(sector, posEnemy) {
    return sector.obtainElementsPosition(posEnemy);
  }
  receiveDamage() {
    this.enemySpaceship.shield -= this.damage;
  }

  shoot(sector, posEnemy) {
    this.enemySpaceship = this.selectObjective(sector, posEnemy);
    this.receiveDamage();
    this.shoots--;
  }
}

class Spaceship_I extends Spaceship {
  constructor() {
    super("FTLS Odyssey");
    this.damage = 3;
    this.shield = 5;
    this.shoots = 5;
  }
}

class Spaceship_II extends Spaceship {
  constructor() {
    super("USS Cormorant");
    this.damage = 2;
    this.shield = 10;
    this.shoots = 7;
  }
}

class Spaceship_III extends Spaceship {
  constructor() {
    super("CSS Canterbury");
    this.damage = 1;
    this.shield = 7;
    this.shoots = 10;
  }
}

class Army {
  constructor(name, type1, type2, type3) {
    this.name = name;
    this.listaNaves = [];
    this.type1 = type1;
    this.type2 = type2;
    this.type3 = type3;
    this.status = "activo";
    this.defeated = Boolean;
  }
  createFulllArmy(name, amount, amount1, amount2) {
    this.name = name;

    while (amount > 0) {
      this.createArmy("tipo1", 1);
      amount--;
    }
    while (amount1 > 0) {
      this.createArmy("tipo2", 1);
      amount1--;
    }
    while (amount2 > 0) {
      this.createArmy("tipo3", 1);
      amount2--;
    }
    return;
  }

  createArmy(type, amount) {
    const nave = this.generateSpaceship(type);
    this.listaNaves.push(...Array(amount).fill(nave));
  }
  generateSpaceship(type) {
    let army;
    if (type == "tipo1") {
      army = new Spaceship_I();
    } else if (type == "tipo2") {
      army = new Spaceship_II();
    } else if (type == "tipo3") {
      army = new Spaceship_III();
    }
    return army;
  }
}

class Battlefield {
  constructor(sector, sector2) {
    this.sector = sector;
    this.sector2 = sector2;
  }
}
class Sector {
  constructor(naves) {
    this.naves = naves;
  }
  obtainElementsPosition(key) {
    return this.naves[key];
  }
}
let army = new Army();
army.createFulllArmy("Ejercito Español", 3, 5, 7);
let army2 = new Army();
army2.createFulllArmy("Los Pollos Hermanos", 3, 5, 7);
let sector = new Sector(army.listaNaves);
let sector2 = new Sector(army2.listaNaves);
let Torremolinos = new Battlefield(sector, sector2);
army.listaNaves[0].shoot(sector2, 3);
army.listaNaves[0].shoot(sector2, 3);
army.listaNaves[0].shoot(sector2, 3);
