function addTwo(num:number){
    return num + 2
}

function getUpper(value:string){
    return value.toUpperCase()
}

function signupUser(email:string, password:string, isPaid:boolean){

}

const loginUser = (email:string, password:string, isPaid:boolean)=>{

}

loginUser("one@gmail.com", "jhgfds", false)

signupUser("kabca", "12345", true)
getUpper("akash mahto")

addTwo(10)


function getValue(value: number){
    if (value>5) {
        return true
    }
    return '200'
}

const getHello = (str: string): string=>{
    return "hello"
}

const heros = ['thor', 'spiderman', 'ironman']

heros.map((hero):string=>{
    return `hero is ${hero}`
    // return 1
})


function logError(errmessage:string): void{
    console.log(errmessage)
}

function handleError(errmessage:string): never{
    throw new Error(errmessage)
    // console.log(errmessage)
}





export{}



