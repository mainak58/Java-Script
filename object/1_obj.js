// constructer method

Object.create


// object literals

let mySym = Symbol("key1") 
const jsUser = {
    name: "mainak" ,
    "full name": "mainak karmkar" ,
    [mySym]: "mykey1",
    age: 24,
    location: "madanpur" ,
    email: "helloworld@hello.com" ,
    isLoggedin: false ,
    lastLoginDays: ["Sunday", "Monday"]  
}

// see some better way to access

console.log(jsUser.name);               // 1s staged
console.log(jsUser["email"]) ;          //2nd stagged       
// console.log(jsuser.fullname);           // can't access
console.log(jsUser["full name"]) ;        // can access
console.log(jsUser["mySym"]) ;        // can access


// change and freeze

jsUser.name = "karmakar" ;
console.log(jsUser["name"]) ;       //  karmakar
// Object.freeze(jsUser) ;         // to freeze can't change anymore
jsUser.name = "hello" ;
console.log(jsUser["name"]) ;  

//pushing values function

jsUser.greeting = function() {
    console.log("hello world") ;
}


//use ()

jsUser.greeting1 = function() {
    console.log(`hello world, ${this["full name"]}`) ;
}
console.log(jsUser.greeting) ;
console.log(jsUser.greeting1()) ;

