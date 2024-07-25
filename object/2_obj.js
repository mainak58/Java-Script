// singelobject

const timderUser = new Object()
console.log(timderUser) ;   //{}


// non singel object

const timderUser ={}
console.log(timderUser) ; 

//for apps

const tinderUser = {} ;

tinderUser.id = "123" ;
tinderUser.name = "Mainak" ;
tinderUser.loggedIn = "false" ;
console.log(tinderUser)  
{ id: '123', name: 'Mainak', loggedIn: 'false' }                   


// nested 

const regularUser = {
    email: "helloworld.helo.com" ,
    fullname: {
        username: {
            firstname: "mainak" ,
            lastname: "karmakar"
        }
    }
}

console.log(regularUser.fullname.username) ;  
{ firstname: 'mainak', lastname: 'karmakar' }          


// object.assign

const obj1 = {1:"1" , 2: "2"} ;
const obj2 = {3:"3" , 4: "4"} ;
const obj3 = Object.assign(obj1,obj2) ;
console.log(obj3) ;        
 // { '1': '1', '2': '2', '3': '3', '4': '4' } but here
 // obj1 is value is changed and obj3 is became obj1


 // spread operator

const obj1 = {1:"1" , 2: "2"} ;
const obj2 = {3:"3" , 4: "4"} ;
const obj3 = {...obj1 , ...obj2} ;
console.log(obj3) ; 

//{ '1': '1', '2': '2', '3': '3', '4': '4' }

const tinderUser = {} ;
tinderUser.id = "123" ;
tinderUser.name = "Mainak" ;
tinderUser.loggedIn = "false" ;
console.log(tinderUser)
//{ id: '123', name: 'Mainak', loggedIn: 'false' }
console.log(Object.keys(tinderUser));
//[ 'id', 'name', 'loggedIn' ]
console.log(Object.values(tinderUser));
//[ '123', 'Mainak', 'false' ]
console.log(Object.entries(tinderUser));
//[ [ 'id', '123' ], [ 'name', 'Mainak' ], [ 'loggedIn', 'false' ] ]
// keys then values
console.log(tinderUser.hasOwnProperty('loggedIn'));
//true