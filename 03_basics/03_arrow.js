const user = {
    username: "Saroj",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Saroj"
//     console.log(this.username);
    
// }
// chai()

// const chai = function (){
//     let username = "Saroj"
//     console.log(this.username);
// }
const chai =  () => {
    let username = "Saroj"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username:"Saroj"})

console.log(addTwo(3,4));

// const myArray =  [1, 2, 4, 6, 9]

// myArray.forEach()