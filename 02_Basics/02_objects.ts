// const user = {
//     name: "Akash",
//     email: "one@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isActive: boolean}){}

// let newUser = {name: "Akash", isActive: false}

// createUser(newUser)



// function createCourse():{name: string, price: number}{
//     return {name: "reactJs", price: 999}
// }


// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user:User):User{
//     return {}
// }

// createUser({name:"Akash", email: "one@gmil.com", isActive:true})


type User = {
    readonly _id: string
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails?: number
}

function createUser(user: User){

}

let myUser: User = {
    _id: "er78ijnb",
    name: "bnm",
    email: "dfghn",
    isActive: true,
}

type cardNumber ={
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}




myUser.email = "456ygbcrtyujbfryh"

// myUser._id="213ds"

createUser({_id: "34567890876rfvb", name: "", email: "", isActive: true})







export{}


