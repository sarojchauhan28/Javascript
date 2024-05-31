
function sayMyname(){
    console.log("S");
    console.log("A");
    console.log("R");
    console.log("O");
    console.log("J");
}
//sayMyname // function refrence
//sayMyname() // function excution

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2){
//    let result = num1 + num2
//    return result
      return num1 + num2
   
}
const result = addTwoNumbers(3, 5)

// console.log("result: ", result);


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} Just Logged In`
// }

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} Just Logged In`
}

// console.log(loginUserMessage("Saroj"));
// console.log(loginUserMessage("Saroj"));


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(100, 300, 800, 900));

const user = {
    username :"Saroj",
    prices : 199
}
function handleObject(anyObject){
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`);
    {handleObject.Price}
}
// handleObject(user)
handleObject({
    username:"Sam",
    price: 299
});

const myNewArray = [200, 400, 500, 800]
function returnSeconbdValue(getArray){
    return getArray[1]
}

// console.log(returnSeconbdValue(myNewArray));
console.log(returnSeconbdValue([200, 400, 500, 800]));