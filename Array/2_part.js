// common mistake 
// take arrray as a data

const marvel_heros = ["thor" , "ironman" , "spiderman"] ;
const dc_heros = ["superman" , "flash" , "batman"] ;
marvel_heros.push(dc_heros) ;                                          
console.log(marvel_heros) ;                  //  [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]


//.concat -> return new

const marvel_heros = ["thor" , "ironman" , "spiderman"] ;
const dc_heros = ["superman" , "flash" , "batman"] ;
// marvel_heros.concat(dc_heros) ;                                          
console.log(marvel_heros) ;             //  [ 'thor', 'ironman', 'spiderman' ] only this part
const allHeros = marvel_heros.concat(dc_heros) ;        // need to store somewhere
console.log(allHeros) ;                            //   [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// .spread 

const marvel_heros = ["thor" , "ironman" , "spiderman"] ;
const dc_heros = ["superman" , "flash" , "batman"] ;                                                 
const allHeros = [...marvel_heros , ...dc_heros] ;        // no more array transfer now it spead
console.log(allHeros) ;         //  [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// array inside array inside array -> to make in a single array

const insideArr = [1,2,3, [4,5,6] ,7,[6,7,[4,5]]] ;
const anotherArr = insideArr.flat(Infinity) ;
console.log(anotherArr) ;       // [1,2,3,4,5,6,7,6,7,4,5]        


// change format from string to array               

console.log(Array.isArray("Mainak")) ;          //  false
console.log(Array.from("Mainak")) ;             //  [ 'M', 'a', 'i', 'n', 'a', 'k' ]
console.log(Array.from({name : "Mainak"}))      //[]


// array convert to  string       value are same but type change 

let myArr = [0,1,2] ;
let newArr = myArr.join() ;
console.log(myArr) ;                  //  [ 0, 1, 2 ]
console.log(newArr) ;                 //    0,1,2


// another

let score1 = 100 ;
let scor2 = 200 ;
let score3 = 300 ;
console.log(Array.of(score1,scor2,score3)) ;    //[ 100, 200, 300 ]