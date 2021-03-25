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
// exercício 1
// https://www.youtube.com/watch?v=abCBo_vEbKc
const fatorial = (n) => {
  return n == 1 ? 1 : n * fatorial(--n);
}

console.log(fatorial(5));
// Exercício 2
const largestWord = frase => {
  const words = frase.split(' ');
  let lWord = words[0];
  for (let i = 1; i < words.length; i++) {
    lWord = lWord.length < words[i].length ? words[i] : lWord;
  }
  return lWord;
}

console.log(largestWord('A maior palavra nesta frase é uma palavrinha e não um palavrão'));

// exercício 4

const changeX = x => {
  let frase = 'As principais habilidades de x são as mostradas a seguir: ';
  return frase.replace("x", x);
}

console.log(changeX('Roberto Coelho'));