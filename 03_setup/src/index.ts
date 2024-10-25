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
    private courseCount = 1

    constructor(
        public email: string,
        public name: string
    ) {
        this.email = email;
        this.name = name
    }

    get getEmail():string{
        return `email is ${this.email}`
    }

    get courseCountNo():Number{
        return this.courseCount
    }

    set courseSetter(number: number){
        if (number <= 1) {
            throw new Error("number should be more than 1")
        }
        this.courseCount = number
    }

}

const hitesh = new User("one@gmial.com", "Akash")