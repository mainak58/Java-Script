// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newNums = myNums.map((num) => {
//     return num + 10 ;
// })
// console.log(newNums);
// // result comes in a array [result]

// myNums.forEach((num) =>{
//    console.log(num+10) ;
// })
// // here result is not in array.


//chaining
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newNums = myNums
                    .map((num) => num * 10)
                    .map((num) => num+1)
                    //[11, 21, 31, 41, 51,61, 71, 81, 91] 
                    .filter((num) => num >=40)
                    // [ 41, 51, 61, 71, 81, 91 ]
console.log(newNums);