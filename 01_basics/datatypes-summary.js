// premitive
// 7 types : String, Number, Boolean, null, undefined,  Symbol, BigInt


const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(typeof anotherId);

const bigNumber = 54545352547099877n

console.log(typeof bigNumber);

console.log(typeof outSideTemp);

console.log(typeof scoreValue);
// non-premitive or refrence type
// Array, Objects, Functions

const heros =["Shaktiman", "Nagraj", "Doga"];
let myObj = {
    name: "Saroj",
    age: 22,
}

const myFunction = function(){
    console.log('Hello World');
}

console.log(typeof myFunction);

console.log(typeof heros);

console.log(typeof myObj);



// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// https://262.ecma-international.org/5.1/#sec-11.4.3