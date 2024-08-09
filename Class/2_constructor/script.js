// // class Mercedescar{
// //     start(){
// //         console.log("start")
// //     }

// //     stop(){
// //         console.log("Stop")
// //     }

// //     setBrand(brand){
// //         this.brandName = brand
// //     }
// // }

// // // jokhon mara kono object create kori
// // //autmatically construct imvoke hoye jai "new" jokhon likhi
// // // creation er time e jodi kono kichu initialize korte hoi
// // //tokhon constuctor kaje laage


// // // crete custom constructor

// // class Mercedescar{

// //     constructor(){
// //         console.log("create a new object")
// //     }

// //     start(){
// //         console.log("start")
// //     }

// //     stop(){
// //         console.log("Stop")
// //     }

// //     setBrand(brand){
// //         this.brandName = brand
// //     }
// // }
// // let maybach = new Mercedescar()


// class Mercedescar{

//     constructor(brand){
//         this.brandName = brand
//     }

//     start(){
//         console.log("start")
//     }

//     stop(){
//         console.log("Stop")
//     }

// }
// let maybach = new Mercedescar("top")
// console.log(maybach)
// //Mercedescar {brandName: 'top'}
// // maybach.brandName = "less"
// // 'less'
// // maybach
// // Mercedescar {brandName: 'less'}







class User {
    constructor(username, email, password){
        this.username= username ;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const mainak = new User("mainak" , "hello@world" , "123")
console.log(mainak.encryptPassword())
console.log(mainak.changeUsername())
