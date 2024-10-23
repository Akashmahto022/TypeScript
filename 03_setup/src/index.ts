class User {
    email:string
    name:string
    city: string = ""
    constructor(email:string, name: string) {
        this.email = email;
        this.name = name
    }
 




}

const hitesh = new User("one@gmial.com", "Akash")
hitesh.city = "Delhi"