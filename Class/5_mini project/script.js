// let DATA = "secret information" ;

// class user {
//     constructor(name , email){
//         this.name = name ;
//         this.email = email
//     }

//     viewData(){
//         console.log("data= ", DATA)
//     }
// }


// let student1 = new user("mainak" , "hello@world.com")
// let student2 = new user("rock" , "rock@gamil.com")

// console.log(student1)
// //user {name: 'mainak', email: 'hello@world.com'}
// // change value inside
// // student1.name = "anything"
// // value will be changed


//create another class admin
//to edit data

let DATA = "secret information" ;

class user {
    constructor(name , email){
        this.name = name ;
        this.email = email
    }

    viewData(){
        console.log("data= ", DATA)
    }
}

//first we need to create admin class
//which inherits data from user

class Admin extends user {

    constructor(name , email){
        super (name , email)
    }
    
    editData(){
        DATA = "do something"
    }
}


let student1 = new user("mainak" , "hello@world.com")
let student2 = new user("rock" , "rock@gamil.com")
let admin1 = new Admin("admin" , "admn@gmail.com")

console.log(student1)