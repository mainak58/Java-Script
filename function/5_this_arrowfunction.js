// const user = {
//     username: "mainak",
//     price: 500,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to here`);
//         console.log(this)
//     }
// }

// console.log(this) ;
// //{}
// //if we use this in js
// //but if we run this at the window console
// // then it gives us the result of window


// //arrow

// function chai(){
//     let username = "mainak"
//     console.log(this.username) ;
//     //undefined keep this in mind useful in dom
// }
// chai()


// //arrow function another way

// const chai = () =>{                        // const chai = function(){}
//     username = "mainak"
//     console.log(this.username)
// }
// chai()


//usage

const addTwo = (num1 , num2) =>{
    return num1+num2 ;
}
console.log(addTwo(5,6))
//11


// implicit return
// no need to write return
//maan liya hain ki vo usi ki value hain
//no need to use paranthesis 
//{} this to write .. use return keyword 
//()this to write..dont use return keyword

const impReturn = (num3 , num4) =>  num3+num4;
console.log(impReturn(5,10))
//15

const noReturnUse = (num5 , num6) =>  (num5+num6);
console.log(noReturnUse(10,10))
//20

const returnObject = () => ({username: "mainak"})
console.log(returnObject)
//[Function: returnObject]
//jodi function er por() use na kori
// then return korbe onno kichu
console.log(returnObject())
//{ username: 'mainak' }