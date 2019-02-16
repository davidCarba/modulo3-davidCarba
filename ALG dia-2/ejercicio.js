class Banco {
  constructor(nombre) {
    this.nombre = nombre;
    this.cuentas = [];
    this.clientes = [];
    this.subscriptores = [];
    this.cuentaBase = null;
  }
  crearCuenta(cliente) {
    const cuenta = this.generarCuenta(cliente);
    this.addCuenta(cuenta);
    this.addCliente(cliente);
    cliente.addCuenta(cuenta);
    return cuenta;
  }
  crearCliente(cliente) {
    const nuevocliente = new Cliente(cliente);
    this.addCliente(nuevocliente);
    return nuevocliente;
  }
  addCliente(cliente) {
    if (this.clientes.indexOf(cliente) === -1) {
      this.clientes.push(cliente);
    }
  }
  addCuenta(cuenta) {
    if (this.cuentas.indexOf(cuenta) === -1) {
      this.cuentas.push(cuenta);
    }
  }
  generarCuentaBase(cuentaBase) {
    this.cuentaBase = cuentaBase;
  }
  generarCuenta(cliente) {
    const nuevaCuenta = new Cuenta(cliente, this);
    if (this.cuentaBase) {
      nuevaCuenta.Comision = this.cuentaBase.Comision;
    }
    return nuevaCuenta;
  }
  Subscribe(cliente) {
    if (this.subscriptores.indexOf(cliente) === -1) {
      this.subscriptores.push(cliente);
    }
  }

  Unsubscribe(cliente) {
    this.subscriptores = this.subscriptores.filter(function(item) {
      if (item !== cliente) {
        return item;
      }
    });
  }

  Fire(publi) {
    var scope = this;
    this.subscriptores.forEach(function(cliente) {
      cliente.LeerPubli(scope, publi);
    });
  }
}

class Cuenta {
  constructor(cliente, banco) {
    this.cliente = cliente;
    this.banco = banco;
    this.saldo = 0;
    this._comision = 0;
  }
  get Comision() {
    return this._comision;
  }
  set Comision(nuevaComision) {
    return (this._comision = nuevaComision);
  }
}
class Cliente {
  constructor(nombre) {
    this.nombre = nombre;
    this.cuentas = [];
  }
  addCuenta(cuenta) {
    if (this.cuentas.indexOf(cuenta) === -1) {
      this.cuentas.push(cuenta);
    }
  }
  LeerPubli(scope, publi) {
    console.log(
      "Cliente " +
        this.nombre +
        " recibe correo de " +
        scope.nombre +
        " con texto:" +
        publi
    );
  }
}

const banco = new Banco("ABANCA");
const cliente1 = banco.crearCliente("David");
const cliente2 = banco.crearCliente("Pepe");

const cuenta1 = banco.crearCuenta(cliente1);
const MaquetaCuenta = new Cuenta(null, banco);
MaquetaCuenta.Comision = 1;
banco.generarCuentaBase(MaquetaCuenta);

const cuenta2 = banco.crearCuenta(cliente1);
const MaquetaCuenta2 = new Cuenta(null, banco);
MaquetaCuenta2.Comision = 2;
banco.generarCuentaBase(MaquetaCuenta2);

const cuenta3 = banco.crearCuenta(cliente2);

banco.Subscribe(cliente1);
banco.Subscribe(cliente2);
banco.Fire("Publi para ti");
banco.Unsubscribe(cliente2);
banco.Fire("Publi para ti tambien");
