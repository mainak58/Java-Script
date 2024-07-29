// const myNum = [1,2,3,4,5,4]

// const checkout = myNum.reduce(function (accumulator , currval) {
//     console.log(`acc ${accumulator} curval ${currval}`);
//     return accumulator+currval
// } , 0)

// console.log(checkout);

// // arrow function

// const myNum = [1,2,3,4,5,4]
// // const myTotal = myNum.reduce((acc , curr) => acc+curr , 0)
// // console.log(myTotal)
// //19

// const myTotal = myNum.reduce((acc , curr) => {
//     return acc+curr} , 0)
// console.log(myTotal)
// //19


// shopping cart

const shoppingCart = [
    {
        itemName : "js course",
        price : 299
    } ,
    {
        itemName : "c++ course",
        price : 465
    } ,
    {
        itemName : "mobile",
        price : 29009
    } ,
    {
        itemName : "js course",
        price : 299
    } ,
    {
        itemName : "dsa",
        price : 4999
    } ,
]

const cart = shoppingCart.reduce((acc , item) => (acc + item.price),0)
console.log(cart);