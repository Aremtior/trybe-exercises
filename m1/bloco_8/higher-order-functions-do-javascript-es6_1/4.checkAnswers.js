const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verify = (a, b) => {
  let sum = 0;
  a.forEach((elementA, index) => {
    if (elementA === b[index]) {
      sum += 1;
    } else if (b[index] !== 'N.A') {
      sum -= 0.5;
    }
  });
  return sum;
}

const checkAnswers = (gabarito, respostas, fn) => fn(gabarito, respostas);

console.log(checkAnswers(rightAnswers, studentAnswers, verify));