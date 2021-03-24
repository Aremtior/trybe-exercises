const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);
// testingScope(false);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

// https://www.w3schools.com/jsref/jsref_sort.asp
// console.log(oddsAndEvens.sort(function(a, b){return a-b}));

console.log(`${oddsAndEvens.sort((a, b) => {return a-b})}`);