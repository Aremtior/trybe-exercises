let word = "Arco-íris";
let ending = "ris";
let areEqual = true;

function endingWord(word, ending) {
  j = word.length - 1;
  for (let i = ending.length - 1; i >= 0; i--) {
    if (word[j] !== ending[i]) {
      areEqual = false;
      break;
    }
    j--;
  }
  if (areEqual) {
    console.log(areEqual + ": O final da string coincide!");
  } else {
    console.log(areEqual + ": O final da string NÃO coincide!");
  }
}

endingWord(word, ending);