const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo
const swap = ([a, b, c]) => [a, b, c] = [c, b, a];
const swapV2 = ([a, b, c]) => [a,, c] = [c, b, a];
const swapV3 = ([a, b, c]) => [c, b, a];
const swapV4 = arr => arr.reverse();

const swappedList = swap(myList);
const swappedList2 = swapV2(myList);
const swappedList3 = swapV3(myList);
const swappedList4 = swapV4(myList);
console.log(swappedList);
console.log(swappedList2);
console.log(swappedList3);
console.log(swappedList4);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);