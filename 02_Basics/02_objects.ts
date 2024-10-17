const user = {
    name: "Akash",
    email: "one@gmail.com",
    isActive: true
}

function createUser({name: string, isActive: boolean}){}

let newUser = {name: "Akash", isActive: false}

createUser(newUser)



function createCourse():{name: string, price: number}{
    return {name: "reactJs", price: 999}
}

export{}


