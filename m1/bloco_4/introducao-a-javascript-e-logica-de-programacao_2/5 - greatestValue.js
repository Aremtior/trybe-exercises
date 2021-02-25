let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let greatestValue = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > greatestValue) {
    greatestValue = numbers[i];
  }
}
console.log("O maior valor do conjunto é: " + greatestValue);