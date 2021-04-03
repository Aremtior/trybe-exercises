// Sugestão de respostas a serem validadas.
const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';

const checkAnswer = gabarito => answer => gabarito.toLowerCase() === answer.toLowerCase();

console.log(checkAnswer(correctAnswer)(userAnswer));

const verify = checkAnswer(correctAnswer);

console.log(verify(userAnswer));
