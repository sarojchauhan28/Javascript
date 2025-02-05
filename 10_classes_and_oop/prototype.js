// let myName = "Saroj     "
// let myChannel = "chai     "


// console.log(myName.trueLength);

let myHeros = ["Thor", "Spiderman", ]

let heroPower = {
    Thor : "hammer",
    Spiderman : "sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.Spiderman}`);
        
    }
}

Object.prototype.Saroj = function(){
    console.log(`Saroj is present in all objects`);
    
}
Array.prototype.HiSaroj = function(){
    console.log(`Saroj is present in all Array`);
    
}
// heroPower.Saroj()
// myHeros.Saroj()

// myHeros.HiSaroj()
// heroPower.HiSaroj()


// inheritance

const user = {
    name : "chai",
    email : "chai@google.com"
}
const Teacher = {
    MakeVideo: true
    
}

const teachingSupport = {
    isAvailable: false
}
const TAchingSupport = {
    makeAssignment: "Js Assignment",
    fullTime: true,
    __proto__:teachingSupport
}

Teacher.__proto__ = user


// modern syntax

Object.setPrototypeOf(teachingSupport, Teacher)

let anotherUserName = "chaiandcode      "


String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
    
}

anotherUserName.trueLength()

"Saroj".trueLength()
"icetea".trueLength()