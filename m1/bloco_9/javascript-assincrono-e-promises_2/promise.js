const promise = new Promise((resolve, reject) => {
  const randNumbers = [];
  for (let index = 0; index < 10; index += 1) {
    randNumbers.push(Math.ceil(Math.random() * 50));
  }
  const squareNumbers = randNumbers.reduce((acc, rn) => {
    acc.push(rn * rn);
    return acc;
  }, []);
  const sumSquare = squareNumbers.reduce((a, b) => a + b, 0);
  if (sumSquare < 8000) {
    return resolve(sumSquare);
  }
  return reject(sumSquare);
})
.then(sum => console.log('resolvida', sum))
.catch(sum => console.log('não resolvida', sum));