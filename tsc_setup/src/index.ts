
const greeting: string = "Hello, TypeScript!";
console.log(greeting);

const mahto: string = "Akash";
console.log(mahto)


class User {

    name: string;
    email: string;


    constructor(
        name: string,
        email: string
    ) {
        this.name = name;
        this.email = email;
    }

    greeting(): string {
        return `hello ${this.name} and your email is ${this.email}`
    }
}


const persone = new User("Akash", "akashemaill@.com")

console.log(persone)