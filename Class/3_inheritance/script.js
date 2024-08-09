// class Parent {
//     hello(){
//         console.log("hello parents");
//     }
// }

// class Child extends Parent{
// }

// let obj = new Child()

// // console window
// //obj.hello = "hello parents"

class Person{
    eat(){
        console.log("eat")
    }
    
    sleep(){
        console.log("sleep")
    }
}

class Engineer extends Person {
    work(){
        console.log("i am working")
    }
}

let mainak = new Engineer()