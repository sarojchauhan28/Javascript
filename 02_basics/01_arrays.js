// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["superman", "wonderwoman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


// +++++++++ Slice, Splice ++++++++++++

console.log("A", myArr);

const myN1 = myArr.slice(1, 3)

console.log(myN1);
console.log("B", myArr);

const myN2 = myArr.splice(1, 3)
console.log("c", myArr);
console.log(myN2);