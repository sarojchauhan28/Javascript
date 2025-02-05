// Object Literel
const user = {
    username : "Saroj",
    LoginCount: 8,
    SignedIn : true,

    getUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);

// - constructor function

// const promiseOne =  new Promise()
// const date =  new Date()


function User(username, LoginCount, isLoggedIn){
    this.username = username;
    this.LoginCount = LoginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome : ${this.username}`);
        
    }

    return this
}

const userOne = new User("Saroj", 12, true)
const userTwo = new User("Chai aor Code", 11, false)

console.log(userOne.constructor);
// console.log(userTwo);
