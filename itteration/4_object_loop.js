const myObject = {
    js: "javascript",
    cpp: "cpp",
    rb: "ruby"
}
for (const key in myObject) {
    console.log(key);
}
// js
// cpp
// rb


const myObject = {
    js: "javascript",
    cpp: "cpp",
    rb: "ruby"
}
for (const key in myObject) {
    console.log(key , myObject[key]);
}
// js javascript
// cpp cpp
// rb ruby


 // object

 const programming = ["js" , "rb" , "pyhthon"]
 for (const key in programming) {
   console.log(key); 
    }
    // 0
    // 1
    // 2


const programming = ["js" , "rb" , "pyhthon"]
for (const key in programming) {
    console.log(programming[key]); 
}

//  js
// rb
// pyhthon