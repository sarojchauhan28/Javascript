function setUsername(username){
    // complex DB call
    this.username = username
    console.log("called");
    
}

function createUsername(username, email, password){
    setUsername.call(this, username)
    this.email = email,
    this.password = password
}

const chai = new createUsername("chai", "chai@fb.com", "123")

console.log(chai);
