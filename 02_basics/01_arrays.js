// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice
//slice
//Takes a portion of an array (or string)
//Does NOT modify the original array
//Returns a new array
//array.slice(start, end)
//start → index to begin (included)
//end → index to stop (excluded)
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
//Negative index = count from end
//let arr = [10, 20, 30, 40, 50];
//console.log(arr.slice(-3)); // [30, 40, 50]

console.log(myn1);
console.log("B ", myArr);
//❌ Remove elements example
// let arr = [10, 20, 30, 40, 50];
// let removed = arr.splice(1, 2);
//array.splice(start, deleteCount, item1, item2, ...)
// console.log(removed); // [20, 30]
// console.log(arr);     // [10, 40, 50]

// ➕ Add elements example
// let arr = [10, 20, 40, 50];
// arr.splice(2, 0, 30);
// console.log(arr); // [10, 20, 30, 40, 50]
// 📌 deleteCount = 0 → nothing removed, only inserted

// 🔁 Replace elements example
// let arr = [10, 20, 30, 40];
// arr.splice(1, 2, 99, 100);
// console.log(arr); // [10, 99, 100, 40]
// 📌 Removed 20, 30, added 99, 100

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
