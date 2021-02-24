let a = 10;
let b = 20;
let c = 50;

console.log("A = " + a + " B = " + b + " C = " + c);
if (a > b) {
  if (a > c) {
    console.log(a + " é o maior valor.");
  } else {
    console.log(c + " é o maior valor.");
  }
} else if (b > c) {
  console.log(b + " é o maior valor.");
} else {
  console.log(c + " é o maior valor.");
}