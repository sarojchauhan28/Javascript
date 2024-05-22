const name = "Saroj"
const repoCount = 50

// console.log(name + repoCount + " value"); //outdated syntax

console.log(`My name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String('Saroj-ch')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("r"));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "     saroj     "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://saroj.com/saroj%20chauhan"

console.log(url.replace('%20', "-"));

console.log(url.includes('hello'))

console.log(gameName.split('-'))


