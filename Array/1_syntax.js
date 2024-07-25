// array

const myArr = [0,1,2,3,4] ;
console.log(myArr[1]) ;


//Array methods

let myArr = [0,1,2] ;
myArr.push(5) ;
myArr.push(6) ;
myArr.push(7) ;
console.log(myArr) ;


// unshift      we use it when we want to push element in array in the beginning

let myArr = [0,1,2] ;
myArr.unshift(5);
console.log(myArr) ;;


//shift         delete element from the beginnning

let myArr = [0,1,2] ;
myArr.shift();
console.log(myArr) ;

//question true and false   to check present in array or not    bool value

let myArr = [0,1,2] ;
console.log(myArr.includes(2)) ;
console.log(myArr.includes(9)) ;


// array convert to  string       value are same but type change 

let myArr = [0,1,2] ;
let newArr = myArr.join() ;
console.log(myArr) ;                  //  [ 0, 1, 2 ]
console.log(newArr) ;                 //    0,1,2

//slice , splice

let myArr = [0,1,2,3,4,5] ;
console.log("A" , myArr) ;                          //  A [ 0, 1, 2, 3, 4, 5 ]
const newArr = myArr.slice(1,3) ;
console.log(newArr) ;                           //  [ 1, 2 ]
console.log("B" , newArr) ;                     //  B [ 1, 2 ]
const spliceArr = myArr.splice(1,3) ;          
console.log("c" , spliceArr) ;                      //  [ 1, 2, 3 ]         
console.log("A" , myArr) ;                      //    A [ 0, 4, 5 ]     // main array value change mainly deleted the value that don't print

// the diffrence between splice and slice is 
// in slice main array remain the same and does not print the last value
// in slice main aray deleted the version that does not print and print the last value also