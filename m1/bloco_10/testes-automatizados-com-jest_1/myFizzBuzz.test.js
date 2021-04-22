function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
it('A number that is divisible by both 3 and 5', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
it('A number that is divisible by 3 only (not by 5)', () => {
  expect(myFizzBuzz(9)).toBe('fizz');
});
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
it('A number that is divisible by 5 only (not by 3)', () => {
  expect(myFizzBuzz(5)).toBe('buzz');
});
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
it('A number that is not divisible by both 3 or 5', () => {
  expect(myFizzBuzz(8)).toBe(8);
});
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
it('A value that is not a number type', () => {
  expect(myFizzBuzz('9')).toBe(false);
});