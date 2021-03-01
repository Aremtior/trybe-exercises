let a = 2541;
let b = 9254;

function crazySum(a, b) {
  let result = '';
  let greatArray = [];
  let smallArray = [];
  let diffLength = Math.abs(a.length - b.length);
  greatArray = (a.length < b.length ? b : a);
  smallArray = (a.length < b.length ? a : b);
  for (let i = 0; i < diffLength; i++) {
    smallArray.unshift("0");
  }
  for (let i = 0; i < greatArray.length; i++) {
    result += parseInt(greatArray[i]) + parseInt(smallArray[i]);
  }
  return result;
}

console.log("A soma maluca é: " + crazySum(a.toString().split(""), b.toString().split("")));