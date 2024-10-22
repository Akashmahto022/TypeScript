interface User {
    readonly dbId: number
    email: string,
    name: string,
    userId: string,
    startTrial: () => string,
    getNumber(): number,
    getCoupon(couponname: string): number
}

const akash: User = {
    dbId: 22,
    email: "akash@gmail.com",
    name: "Akash",
    userId: "23edc",
    startTrial: () => {
        return "started"
    },
    getNumber:()=>{return 20},
    getCoupon: (name: "cop10")=> {return 10},
}

