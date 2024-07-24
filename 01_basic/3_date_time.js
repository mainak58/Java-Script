// date 

let myDate = new Date() ;
console.log(myDate) ;

// date string

let myDateString = new Date() ;
console.log(myDateString.toString()) ;

//Isostring

let myDateIsostring = new Date() ;
console.log(myDateIsostring.toISOString()) ;         //indian standerd time shown

//toJson

let myDateJson = new Date() ;
console.log(myDateJson.toISOString()) ;              //not major changes

//LocalDateString

let myDateLocalDateString = new Date() ;
console.log(myDateLocalDateString.toISOString()) ;       //not major changes

//Localestring

let myDateLocalestring = new Date() ;
console.log(myDateLocalestring.toISOString()) ;          //year month date time

//decleare specific date

let myCreatedDate = new Date (2024,6,25) ;          //year month(0) date
console.log(myCreatedDate.toDateString()) ;

//decleare date with time

let myCreatedDate = new Date (2024,6,25,12,53) ;          //year month(0) date time
console.log(myCreatedDate.toLocaleString()) ;

//dd-mm-yy

let myCreatedDate = new Date ("2024-06-25") ;          //year month(0) date time
console.log(myCreatedDate.toLocaleString()) ;

//time-stamp

let myTimeStamp = Date.now() ;
console.log(myTimeStamp) ;

//time stamp in seconds

let myTimeStamp = Date.now() ;
console.log(Math.floor(Date.now()/1000)) ;

//date stop

let newDate = new Date () ;
console.log(newDate.getDay()) ;