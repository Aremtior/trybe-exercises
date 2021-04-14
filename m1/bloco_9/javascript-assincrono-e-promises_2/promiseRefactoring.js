const randNumbers = (arr = [], length = 10) => {
  for (let index = 0; index < length; index += 1) {
    arr.push(Math.ceil(Math.random() * 50));
  }
  return arr;
}
const squareNumbers = (arr) => arr.reduce((a, b) => {
  a.push(b * b);
  return a;
}, []);

const arrDivide = (sum) => {
  return [2, 3, 5, 10].map((number) =>
      Math.round(sum / number))
      .reduce((a, b) => a + b);
}

const arrOperations = () => {
  const sumSquare = squareNumbers(randNumbers()).reduce((a, b) => a + b, 0);
  if (sumSquare < 8000) {
    return (sumSquare);
  }
  throw new Error();
}

const arrOp = async () => {
  try {
    const sum = await arrOperations();
    console.log('resolvida', sum);
    const sumDivide = arrDivide(sum);
    console.log(sumDivide);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}
arrOp();