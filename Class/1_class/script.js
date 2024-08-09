// cls is a programme code templete for creating object
// object have some variable 
//object have some function
// when we want to create in a bulk object
// is a blue print
// its a templete
//when we create object its looks same

class Mercedescar{
    start(){
        console.log("start")
    }

    stop(){
        console.log("Stop")
    }
}

// syntax to create an object
// let myObj = new Myclass()

let maybach = new Mercedescar()

console.log(maybach)
//Mercedescar {}
// typeof maybach 'object'
//prototype 
//start() stop() object ese gache
//maybach.start
        //ƒ start(){
        //     console.log("start")
        // }
//maybach.start()
//  start


// create second Object

let glc = new Mercedescar()
//glc.start()
//start



class Mercedescar{
    start(){
        console.log("start")
    }

    stop(){
        console.log("Stop")
    }

    setBrand(brand){
        this.brandName = brand
        // this er sathe lekha jeta ota class er property
    }
}

let maybach = new Mercedescar()
maybach.setBrand("top class")
//Mercedescar {brandName: 'top class'}
// brandName
// : 
// "top class"
// [[Prototype]]
// : 
// Object


class Product{
    constructor(name , price){
        this.name = name ;
        this.price = price
    }

    displayProduct(){
        console.log(`product: ${this.name}`)
        console.log(`price: ${this.price}`)
    }

    getTax(tax){
        return this.price + (this.price * tax)
    }
}

const product1 = new Product('shirt' , 200)
const product2 = new Product('pants' , 200) 
const tax = 0.10 ;

const total = product2.getTax(tax)
console.log(`The total cost is ${total.toFixed(2)}`)
