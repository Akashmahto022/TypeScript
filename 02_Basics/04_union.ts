let score: number | string   = 22

score =  55
score = "55"


type User = {
    name: string;
    id: number
}

type admin = {
    username: string;
    id: number
}

let myUser: User | admin = {
    name: "Akash",
    id: 54
}

myUser = {username: "Akash", id: 852}

// function getDbId(id: number | string){
//     console.log(`DB id id ${id}`)
// }

function getDbId(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    }else{
        id + 2
    }
}




getDbId(3)
getDbId("asdADA")


const data: (number | string | boolean)[]= [1, "two", true]

let pi:3.14 = 3.14

let seatAllotment: "aisle" | "middle" | "windoe"

seatAllotment = "aisle"
// seatAllotment = 'crew' givin the error