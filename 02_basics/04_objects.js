// Singleton

// const tindorUSer = new Object() //singleton object
const tindorUser = {} //non signleton object


tindorUser.id = "123abc"
tindorUser.name = "jhon"
tindorUser.isLoggedIn = false

// console.log(tindorUser);

const regularUser = {
    email: "saroj@gmail.com",
    fullname: {
        userfullname: {
            Firstname:"Saroj",
            Lastname: "Chauhan"
        }
    }
}
// console.log(regularUser.fullname.userfullname.Firstname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

// const obj3 = {obj1, obj2}
// const allObj = Object.assign({}, obj1, obj2, obj3)
const allObj = {...obj1, ...obj2, ...obj3} // 90% we will use this spread oprator {...}
// console.log(allObj);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    }
]
users[1].id

// console.log(users[1].id)

// console.log(tindorUser)

// console.log(Object.keys(tindorUser));
// console.log(Object.values(tindorUser));
console.log(Object.entries(tindorUser));

console.log(tindorUser.hasOwnProperty('isLoggedIn'));