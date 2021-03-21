function palindromo(word) {
  let wordPrepare = word.toLowerCase().split(" ").join("");
  // outra maneira de fazer alternativa, onde gi significa que irá buscar em toda a string (global) e i torna case Insensitive. Nesse caso o i poderia ter sido omitido, pois estamos apenas buscando por espaços, e case sensitive não se aplica nesse caso.
  // let wordReverse = wordPrepare.replace(/\s/gi, '').split("").reverse().join("");
  // split faz com que a string seja separada e transformada em um array, pois a função reverse é de Arrays e não strings. Em seguida se usa a função join para tornar o array em string novamente. Por isso o primeiro split irá separar a string letra por letra, mantendo os espaços em branco, e o segundo split vai remover os espaços em branco.
  let wordReverse = wordPrepare.split("").reverse().join("").split(" ").join("");
  if (wordPrepare === wordReverse) {
    console.log(word + " É palíndromo");    
  } else {
    console.log(word + " NÃO É palíndromo");    
  }
}
palindromo('socorram me subi no onibus em marrocos');
palindromo('Arara');
palindromo('Madam Im Adam');
palindromo('Uma frase qualquer');
palindromo('Palavras');
