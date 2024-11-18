"use strict";
/**
 * Access modifiers in typescript
 * public,private,protected
 * public by default
 * private can't access outside the class
 * protected can't access outside the class but can access in derived classes
 */
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
}
/**
 * Derived class from BankAccount
 * can access public and protected members of BankAccount
 * can't access private members of BankAccount
 */
class Student5 extends BankAccount {
    test() {
        // this.balance = 2000; //is not accessible because it is private    
    }
}
/**
 * Creating an instance of BankAccount
 * can access public members only
 * can't access private or protected members
 */
const account = new BankAccount(1, "John Doe", 1000);
// account.balance = 2000; //is not accessible from outside this is private by default is public
console.log(account);
