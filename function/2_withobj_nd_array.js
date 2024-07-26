function calculateCartPrice(num1){
    return num1 ;
}
console.log(calculateCartPrice(2))


//noe what if there are ,multiple products

console.log(calculateCartPrice(200,400,500)) ;
//200 
//print only one value because
//in the function i have taken only one value


//to reslve the problem 
//we use rest operator 

function calculateCartPrice(...num1){
    return num1 ;
}
console.log(calculateCartPrice(300,400,302))
//[ 300, 400, 302 ]
//we found an array
//can go upto infinite level


//object and function co-ordination

const user= {
    userName: "mainak",
    price: 0
}

function handelObject(anyObject){
    console.log(`the user name is ${anyObject.userName}`) ;
}
//handelObject(user) ;
//we also don't need to write a full object
//we also can use this
handelObject({
    userName: "sam",
})


//passing arrray

const myNewArr = [200,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArr)) ;
//400