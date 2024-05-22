// number

const score = 300
// console.log(score);

const balance = new Number(200)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 134.299
// console.log(otherNumber.toPrecision(4));

const hunderds = 1000000
// console.log(hunderds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min);