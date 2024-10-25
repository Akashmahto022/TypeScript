// class User {
//     private email:string
//     public name:string
//     city: string = "noida"
//     constructor(email:string, name: string) {
//         this.email = email;
//         this.name = name
//     }


// }
class User {
    constructor(
        public email: string,
        public name: string
    ) {
        this.email = email;
        this.name = name
    }


}

const hitesh = new User("one@gmial.com", "Akash")