// const coading = ["js" , "c++" , "java" , "python"]

// coading.forEach((item) => {
//     console.log(item) ;
// })

// what if i store the value

// const values = coading.forEach((item) => {
//     console.log(item) ;
// })

// console.log(values);
// //undefined
// // not return value


// const myNums = [1, 2, 3, 4, 5, 6]
// const newNums = myNums.filter((num) => num > 4 )
// console.log(newNums);


// //either
// //if we use {} needs to return values

// const myNums = [1, 2, 3, 4, 5, 6]
// const newNums = myNums.filter((num) => {
//      return num > 4 ;
//     })
// console.log(newNums);


// // use for each loop filter

// const myNums = [1, 2, 3, 4, 5, 6] ;
// const newNums = [] ;
// myNums.forEach((num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);
// ///[ 5, 6 ]




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter((bk) => {
     return bk.publish>=1995 && bk.genre === 'Science';
})
console.log(userBooks);
