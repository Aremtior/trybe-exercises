const compare = (a, b) => a === b;

const prizeDraw = (num, fn) => {
  const randNum = Math.ceil(Math.random() * 5);
  if (fn(num, randNum)) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
};

console.log(prizeDraw(5, compare));
