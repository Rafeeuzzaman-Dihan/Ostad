class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount} into Account Number: ${this.accountNumber}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount} from Account Number: ${this.accountNumber}`);
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Owner Name: ${this.ownerName}`);
    console.log(`Balance: $${this.balance}`);
  }
}

// Creating instances of BankAccount
const account1 = new BankAccount(1001, "TMV Paloma", 2000);
const account2 = new BankAccount(1002, "Tripple A", 500);

// Depositing, withdrawing, and displaying account information
account1.deposit(200);
account1.withdraw(500);
account1.displayAccountInfo();

account2.deposit(500);
account2.withdraw(1500);
account2.displayAccountInfo();