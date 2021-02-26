let n;
let prime = true;
n = 19;
for (let i = 3; i <= n / 2; i += 2) {
  if (n % 2 == 0 && i != n) {
    prime = false;
    break;
  } else if (n % i == 0 && i != n) {
    prime = false;
    break;
  }
}
if (prime && n != 4 && n != 1) {
  console.log(n + ' é primo.');
} else {
  console.log(n + ' não é primo.');
}