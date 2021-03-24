let fatoria = n => {
  let fator = 1;
  for (let i = n; i > 0; i--) {
    fator *= i;
  }
  return fator;
}

// console.log(fatoria(5));

// const fatorial = (n, fator) => {
//   if (n > 0) {
//     fator *= n;
//     return fatorial(--n, fator);
//   } else {
//     return fator;
//   }
// }

// const fatorial = (n) => {
//   if (n > 0) {
//     return n * fatorial(--n);
//   } else {
//     return 1;
//   }
// }

// https://www.youtube.com/watch?v=abCBo_vEbKc
const fatorial = (n) => {
  return n == 1 ? 1 : n * fatorial(--n);
}

console.log(fatorial(5));