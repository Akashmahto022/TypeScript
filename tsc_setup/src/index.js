"use strict";
const greeting = "Hello, TypeScript!";
console.log(greeting);
const mahto = "Akash";
console.log(mahto);
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    greeting() {
        return `hello ${this.name} and your email is ${this.email}`;
    }
}
const persone = new User("Akash", "akashemaill@.com");
console.log(persone);
