interface User {
    readonly dbId: number
    email: string,
    name: string,
    userId: string,
    startTrial: () => string,
    getNumber(): number,
    getCoupon(couponname: string): number
}

interface User{
    githubToken: string,

}

interface Admin extends User{
    role: "admin" | "user" | "learner"
}


const akash: Admin = {
    dbId: 22,
    role: "admin",
    githubToken: "github",
    email: "akash@gmail.com",
    name: "Akash",
    userId: "23edc",
    startTrial: () => {
        return "started"
    },
    getNumber:()=>{return 20},
    getCoupon: (name: "cop10")=> {return 10},
}

