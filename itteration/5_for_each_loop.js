const coading = ["js" , "c++" , "java" , "ruby"]
// coading.forEach(function name(){}) 
// this is how we write function
coading.forEach(function (value){
    // because this is a call back function
    // no need to write function name
    console.log(value);
})
// js
// c++
// java
// ruby

// arrow fuction

const coading = ["js" , "c++" , "java" , "ruby"]
coading.forEach((keys) => {
    console.log(keys);
})
// js
// c++
// java
// ruby


// using function

const coading = ["js" , "c++" , "java" , "ruby"]
function print(item){
    console.log(item);
}

coading.forEach(print) ;

// js
// c++
// java
// ruby

//other values

const coading = ["js" , "c++" , "java" , "ruby"]
coading.forEach( (item , index , arr) =>{
    console.log(item , index , arr);
})
// js 0 [ 'js', 'c++', 'java', 'ruby' ]
// c++ 1 [ 'js', 'c++', 'java', 'ruby' ]
// java 2 [ 'js', 'c++', 'java', 'ruby' ]
// ruby 3 [ 'js', 'c++', 'java', 'ruby' ]


// most used scenerio
// [{} , {} , {}]

const myCoding = [
    {   languageName : "javascipt" ,
        languageFile : "js"

    } ,
    {   languageName : "java" ,
        languageFile : "java" 

    } ,
    {   languageName : "python" ,
        languageFile : "py"

    }
]

myCoding.forEach( (item) => {
    console.log(item);
})

{ languageName: 'javascipt', languageFile: 'js' }
{ languageName: 'java', languageFile: 'java' }
{ languageName: 'python', languageFile: 'py' }

myCoding.forEach( (item) => {
    console.log(item.languageName);
})

// javascipt
// java
// python


myCoding.forEach( (item) => {
    console.log(item.languageFile);
})
// js
// java
// py

//taking access from {}

// array e moddhey object er modheyr value bar kora jabe