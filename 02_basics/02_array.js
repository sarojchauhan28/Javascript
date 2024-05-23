const marvel_heros = ["spiderman", "thor", "woderwoman" ]
const dc_heros = ["superman", "flash", "batman" ]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros);

const anotherArray = [1, 2, [ 3, 4,], 5, [6, 7,[ 8, 9]]]

const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);

console.log(Array.isArray('Saroj'));
console.log(Array.from('Saroj'));
console.log(Array.from({name : 'Saroj'})); // interesting case 

let score1 = 100
let score2 = 400
let score3 = 300

console.log(Array.of(score1, score2, score3));

//need to more study on array  is, from and of 