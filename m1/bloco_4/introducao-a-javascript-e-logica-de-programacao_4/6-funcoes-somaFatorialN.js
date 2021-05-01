let n = 9;

function somaFatorial(value) {
  let sum = 0;
  for (let i = 1; i <= value; i++) {
    sum += i;
  }
  console.log("A soma de todos os valores até " + n + " é igual a " + sum);
}

somaFatorial(n);