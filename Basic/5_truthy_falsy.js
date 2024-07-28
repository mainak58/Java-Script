const userEmail = "hello.world@gmail"

if(userEmail){
    console.log("got user email");
}
else{
    console.log("dont have email");
}
// got user email


//what if empty string

const userEmail = "" ;  

if(userEmail){
    console.log("got user email");
}
else{
    console.log("dont have email");
}
//dont have email
//here comes the problem 


// what if empty array

const userEmail = [] ;  

if(userEmail){
    console.log("got user email");
}
else{
    console.log("dont have email");
}

now it gave us true value
but for string it gave false value in case of empty string

Falsy value
    false , 0 , -0 , BigInt 0n , "" , null , undefined , Nan
other then else every things are truthy value


Truthy Value
    "0" , 'false' (inside string) , " "(empty but there is a space)
    [] , {} , function(){}


    const userEmail = [] ;  

if(userEmail.length === 0){
    console.log("got user email");
}
else{
    console.log("dont have email");
}


// what if pbject come empty

const emptyObject = {} ;
if(Object.keys(emptyObject).length === 0) '{
console.log("object is empty");



// Nullish Coalscing operator

let val1 ;
val1 = 5 ?? 10 ;
console.log(val1);
//5
val1 = null ?? 10 ;
console.log(val1);
// 10
val1 = undefined ?? 15 ;
console.log(val1);
//15


//Ternari operator

// condition ?  true:false;

const chai = 100 ;
chai<=100 ? console.log("true") : console.log("false");