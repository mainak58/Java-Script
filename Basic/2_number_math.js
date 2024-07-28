// const balance = 100
// console.log(balance)

// const othernumber = 112.23
// console.log(othernumber.toPrecision(3))

// const othernumber2 = 112.29
// console.log(othernumber.toPrecision(2))

// const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'))

// Maths //

// console.log(Math)
// console.log(Math.abs(-4))           // to make number positive
// console.log(Math.round(4.3))
// console.log(Math.ceil(4.3))         // take above 4 value
// console.log(Math.floor(4.3))        //take lower 4 value
// console.log(Math.min(4,5,6,9))      // take minimum value
// console.log(Math.max(4,5,6,9))      //take maximum value

console.log(Math.random()) ;
console.log((Math.random()*10)+1) ;         // to take value 0-10 adding +1 because if it 0 then it will help

let max = 20 ;
let min = 10 ;

console.log(Math.floor(Math.random() * (max-min+1))) ;  
// use math.floor so we can get value in decimal. some time it grt value of 0 so we use floor . here we can't use ceil 