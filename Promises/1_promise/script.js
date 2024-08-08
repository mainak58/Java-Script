// const promiseOne = new Promise(function(resolve , reject){
//     // do asyn task
//     // Db calls , Cryptograph , network
//     setTimeout(function(){
//         console.log("async task is complete")
//         resolve()  // to connect .then()
//     },1000)
// })


// // // promise.then linked with resolve
// promiseOne.then(function(){
//     console.log("promise consumes");
    
// })


// // stage 2 same code 
// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("async is completed");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("async is solved")
// })

// //3rd

// const promiseThree = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         resolve({username:'mainak' , email:'hello@world.com'})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)       // // { username: 'mainak', email: 'hello@world.com' }
// })

// //4th promise
// //1st step
// // .catch() to error

// const promiseFour = new Promise(function(resolve , reject){
    // setTimeout(function(){
    //     let error = false    // true => something went wrong
    //     if(!error){
    //         resolve ({username:'mainak' , email:'hello@world.com'})
    //     }
    //     else{
    //         reject("something wrong")
    //     }
    // },1000)
// })

// // promiseFour.then().catch()
//  promiseFour
//  .then((user) => {
//     return user.username
//  })
//  .then((myusername) =>{
//     console.log(myusername)
//  })
//  .catch(function(myError){
//     console.log(myError)
//  }).finally(() => {
//     console.log("the promise is either resolve or rejected")
//  })


// promise 5
// .then() .catch() is not only the option
// we can do this via asyc await also

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true    
        if(!error){
            resolve ({username:'mainak' , ps:'hello@world.com'})
        }
        else{
            reject("something wrong")
        }
    },1000)
})

// async function consumepromiseFive(){
//     const responce = await promiseFive
//     console.log(responce)
// }

async function consumepromiseFive(){
    try {
        const responce = await promiseFive
        console.log(responce)
    } catch (error) {
        console.log('error')
    }
}

consumepromiseFive()