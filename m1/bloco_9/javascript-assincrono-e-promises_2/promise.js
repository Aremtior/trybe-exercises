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
.then(sum => {
  console.log('resolvida', sum);
  const arrDivide = [2, 3, 5, 10];
  for (let index = 0; index < arrDivide.length; index++) {
    arrDivide[index] = Math.round(sum / arrDivide[index]);
  }
  console.log(arrDivide);
  return arrDivide;
})
.then((arrDivide) => {
  return new Promise((res, rej) => {
    const sumDivide = arrDivide.reduce((a, b) => a + b);
    return res(sumDivide);
  })
    .then((s) => console.log(s))
})
.catch(sum => console.log('É mais de oito mil! Essa promise deve estar quebrada!', sum));