// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Saroj",
    "Full Name": "Saroj Chauhan",
    [mySym] : "mykey1",
    age : 20,
    location : "Noida",
    email : "saroj@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Wednesday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["Full Name"]);
// console.log(jsUser[mySym]);

jsUser.email = "saroj12@gmail.com"
// console.log(jsUser["email"]);

// Object.freeze(jsUser)
jsUser.email = "saroj12@yahoo.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());