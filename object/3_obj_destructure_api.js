// destructering object

const course = {
    name: "js from chai aur code",
    price: "0",
    courseInstuctor: "Hitesh sir"
}

console.log(course.courseInstuctor)

const {courseInstuctor} = course

//shortcut to clean our code
console.log(courseInstuctor)
//Hitesh sir

// another shortcut
const {courseInstuctor: instructor} = course
console.log(instructor);
// rename courseInstructor as instructor
//Hitesh sir