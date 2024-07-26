function one(){
    const username = "mainak"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);
    two()
}
one()


//type 1

function one(num){
    return num+1 ;
}
console.log(one(5))


//type 2

const two = function(num2){
    return num2+1 ;
}
console.log(two(1))       


//type 1 valid in the beginning

console.log(one(5))
function one(num){
    return num+1 ;
}


//type 2 invalid if i do in th beginning

console.log(two(1))                     // invalid in the beginning in this process
//can not access'two' before initialization
const two = function(num2){
    return num2+1 ;
}
// we decleare but in on the same time
// we store it in a variable