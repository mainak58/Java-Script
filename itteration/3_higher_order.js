array specific loop

["" , "" , '']      // for array
[{} , {} , {}]      // for object

const arr = [1, 2, 3, 4, 5, 6] ;
for (const num of arr) {
    console.log(num) ;
}

const greeting = "hello world" ; 
for (const greet of greeting) {
    console.log(`each character is ${greet}`) ;
}


//key and value

const map = new Map()
map.set('in', "India") ;
map.set('Rs', "Russia") ;
map.set('Nw', "NewYork") ;
    console.log(map);

    //{ 'in' => 'India', 'Rs' => 'Russia', 'Nw' => 'NewYork' }


const map = new Map()
map.set('in', "India") ;
map.set('Rs', "Russia") ;
map.set('Nw', "NewYork") ;
    for (const key of map) {
        console.log(map);
    }

    //Map(3) { 'in' => 'India', 'Rs' => 'Russia', 'Nw' => 'NewYork' }
    //Map(3) { 'in' => 'India', 'Rs' => 'Russia', 'Nw' => 'NewYork' }
    //Map(3) { 'in' => 'India', 'Rs' => 'Russia', 'Nw' => 'NewYork' }


const map = new Map()
map.set('in', "India") ;
map.set('Rs', "Russia") ;
map.set('Nw', "NewYork") ;
    for (const key of map) {
        console.log(key);
    }

//   [ 'in', 'India' ]
//      [ 'Rs', 'Russia' ]
//[ 'Nw', 'NewYork' ]



const map = new Map()
map.set('In', "India") ;
map.set('Rs', "Russia") ;
map.set('Nw', "NewYork") ;
    for (const [key , value] of map) {
        console.log(key , value);
    }

// In India
// Rs Russia
// Nw NewYork


//for of loops in object

const myObj = {
    'game': "nfs" ,
    gmae2 : "iam" ,
    game3: 65
}
for (const [keys , value] of myObj) {
    console.log(keys , value);
}
//myObj is not iterable
// keep this in mind
// object is not iterbl through forof loop