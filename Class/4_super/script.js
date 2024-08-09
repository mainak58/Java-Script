// to use the value of parent mostly we use super()

class person{

    constructor(branch){
        this.person = branch
    }

    eat(){
        console.log("the persom can eat properly")
    }
    
    sleep(){
        console.log("the person cam sleep also")
    }

    
}

class enginner extends person {
    constructor(branch){
        super()
        this.branch = branch
    }

    work(){
        super.eat()  // to access the direct value from parent
        console.log("Construction job")
    }
}

class doctor extends person {

    work(){
        console.log("Treat patient")
    }
}

let mainak = new enginner()

// gives an error message bcause we need to create super constructor