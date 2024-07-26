// // Immediately Invoked Function Expression
// // to execute immidiately 
// // for interview to stop polluting from global scope


// //iife we use not to polute in locan fuction

// function chai(){
//     console.log(`DB Connected`)
// }
// chai()


// how to use iife

(function chai(){
    console.log(`DB Connected`)
})() ;

// ()FOR function and 2nd() for execution

//arrow function
(() =>{
    console.log(`DB connect 2`) 
}) () ;


//name

((name) =>{
    console.log(`DB connect 2 ${name}`) 
}) ("mainak") ;