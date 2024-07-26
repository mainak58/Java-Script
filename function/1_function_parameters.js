// function sayMyname(){
// console.log("M");
// console.log("A");
// console.log("I");
// console.log("N");
// console.log("A");
// console.log("K");
// }

// //sayMyname       // reference means without parantheses
// //sayMyname()     // with parantheses means execution

// // sayMyname() ;


// //addition

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2) ;
// }
// addTwoNumbers(3,4);
// //7
// addTwoNumbers(3,"4");
// //34
// addTwoNumbers(3,"a");
// //3a


// //beginnner mistakes
// //store the value in any constant

// const result = addTwoNumbers(3,5) ;
// //8

// //but here comes the twist
// //clearly visible that the value store in result is a number but 
// console.log(result);
// //undefined


// // use of result 
// // console.log is a way of printing value
// //it does not resturn any value
// //but return is for returning somathing

// function addTwoNumbers(number1,number2){
//     // let result = number1 + number2 ;
//     return number1 + number2 ;
// }

// let mainResult = addTwoNumbers(3,5)
// console.log(mainResult);
// //8


//login-msg

function loginUserMessage(user){
    return `${user} just logged in`
}
loginUserMessage("Mainak") ;
//does not print in terminal because it return its value 
//but there is no catcher
// return then console.log is for catch and print
console.log(loginUserMessage("Mainak"))
