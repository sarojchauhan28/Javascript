const promiseOne = new Promise((resolve, reject) => {
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
        
    }, 1000);
})

promiseOne.then(function(){
    console.log('promis consumed')
})

new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async is resolved")
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username:"Saroj",
            email:"saroj@example.com"
        })
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
       if (!error) {
        resolve({
            username: "sarojchauan",
            password: "123"
        })
       }else{
            reject('ERROR: Somthing went wrong')        
       }
    }, 1000);
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch( (error) => {
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected "))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
       if (!error) {
        resolve({
            username: "javascript",
            password: "123"
        })
       }else{
            reject('ERROR: JS went wrong')        
       }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))