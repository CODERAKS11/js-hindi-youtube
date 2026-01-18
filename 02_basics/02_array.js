const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// array.flat(depth)
// depth = how many levels deep you want to flatten
// Default depth = 1
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// "Hitesh" is a string primitive, not an array.
// Array.isArray() is a strict check → only returns true for real arrays ([]).
console.log(Array.isArray("Hitesh"))

console.log(Array.from("Hitesh")) //['H', 'i', 't', 'e', 's', 'h']
//Array.from() works on iterables
// A string is iterable (character by character)
//Array.from("12345", Number) // [1, 2, 3, 4, 5]
console.log(Array.from({name: "hitesh"})) //  output : []
// Why does this NOT throw an error?
// Because Array.from() expects one of two things:
// An iterable (like string, array, Set, Map)
// OR an array-like object (must have length property)

//Array.from({ length: 3 })
// [undefined, undefined, undefined]
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
//Array(3) -> create empty array of length 3
//Array.of(100) -> [100]
