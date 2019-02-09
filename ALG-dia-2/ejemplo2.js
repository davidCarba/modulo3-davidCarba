class Cuenta {
  constructor(name, transactionBook) {
    this.name = name;
    this.transactionBook = transactionBook;
  }
  receive(amount) {
    const transaction = new Transaction(null, this, amount, "Pipupi");
    this.transactionBook.addTransaction(transaction);
  }

  send(recipient, amount) {
    const transaction = new Transaction(this, recipient, amount, "Pipupi");
    this.transactionBook.addTransaction(transaction);
    this.receive(-this.rate);
  }

  get amount() {
    return this.transactionBook.calcAmountForAccount(this);
  }

  get transactions() {
    return this.transactionBook.findTransactionsForAccount(this);
  }
}

class CuentaP extends Cuenta {
  constructor(name, transactionBook) {
    super(name, transactionBook);
  }
  get rate() {
    return 0.01;
  }
}

class BussinesAccount extends Cuenta {
  constructor(name, transactionBook) {
    super(name, transactionBook);
  }
  get rate() {
    return 0.02;
  }
}

class Transaction {
  constructor(send, recive, amount, reference) {
    this.send = send;
    this.recive = recive;
    this.amount = amount;
    this.reference = reference;
  }
}

class TransactionBook {
  constructor(bankAccount) {
    this.bankAccount = bankAccount;
    this.transactions = [];
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  calcAmountForAccount(account) {
    return this.transactions.reduce(function(amount, transaction) {
      if (transaction.send && transaction.send.name === account.name) {
        return amount - transaction.amount;
      } else if (transaction.recive.name === account.name) {
        return amount + transaction.amount;
      } else {
        return amount;
      }
    }, 0);
  }

  findTransactionsForAccount(account) {
    return this.transactions.filter(
      transaction =>
        (transaction.send && transaction.send.name === account.name) ||
        transaction.recive.name === account.name
    );
  }
}

const transactionBook = new TransactionBook("Abanca");
const account1 = new CuentaP("Cuenta Privada", transactionBook);
const account2 = new BussinesAccount("Cuenta de empresa", transactionBook);
account1.receive(1000);
account2.receive(500);
account1.send(account2, 100);
account2.send(account1, 200);
console.log(account1.transactions);
console.log(account1.amount);
console.log(account2.transactions);
console.log(account2.amount);
console.log(transactionBook.transactions);

// class Account {
//   constructor(ledger, name) {
//     this.ledger = ledger;
//     this.name = name;
//   }

//   send(receiver, amount, reference) {
//     this.ledger.addTransaction(
//       new Transaction(this, receiver, amount, reference)
//     );
//     this.ledger.addTransaction(
//       new Transaction(this, this.ledger.bankAccount, 0.01, "Transaction Fee")
//     );
//   }

//   get amount() {
//     return this.ledger.calculateAmountForAccount(this);
//   }

//   get transactions() {
//     return this.ledger.findTransactionsForAccount(this);
//   }

//   toString() {
//     return `${this.name} ${this.amount}`;
//   }
// }

// class BusinessAccount extends Account {
//   constructor(ledger, name) {
//     super(ledger, name);
//   }

//   send(receiver, amount, reference) {
//     this.ledger.addTransaction(
//       new Transaction(this, receiver, amount, reference)
//     );
//     this.ledger.addTransaction(
//       new Transaction(this, this.ledger.bankAccount, 0.02, "Transaction Fee")
//     );
//   }
// }

// class Ledger {
//   constructor() {
//     this.transactions = [];
//   }

//   addTransaction(transaction) {
//     this.transactions.push(transaction);
//   }

//   calculateAmountForAccount(account) {
//     return this.transactions.reduce((amount, transaction) => {
//       if (transaction.sender == account) {
//         amount -= transaction.amount;
//       }
//       if (transaction.receiver == account) {
//         amount += transaction.amount;
//       }
//       return amount;
//     }, 0);
//   }

//   findTransactionsForAccount(account) {
//     return this.transactions.filter(transaction => {
//       if (transaction.sender == account || transaction.receiver == account) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//   }
// }
// class Transaction {
//   constructor(sender, receiver, amount, reference) {
//     this.sender = sender;
//     this.receiver = receiver;
//     this.amount = amount;
//     this.reference = reference;
//   }
// }

// ledger = new Ledger();

// // setup bank account and wire to to the ledger (for transaction fees)
// bankAccount = new Account(ledger, "Deutsche Bank");
// ledger.addTransaction(
//   new Transaction(null, bankAccount, 1000000, "Initial Amount")
// );
// ledger.bankAccount = bankAccount;

// // setup private account
// privateAccount = new Account(ledger, "Sebastian Deutsch");
// ledger.addTransaction(
//   new Transaction(null, privateAccount, 100, "Initial Amount")
// );

// // setup private account
// anotherPrivateAccount = new Account(ledger, "Mathias Schäfer");
// ledger.addTransaction(
//   new Transaction(null, anotherPrivateAccount, 100, "Initial Amount")
// );

// // setup company account
// companyAccount = new BusinessAccount(ledger, "9elements GmbH");
// ledger.addTransaction(
//   new Transaction(null, companyAccount, 1000, "Initial Amount")
// );
