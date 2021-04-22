const { expect } = require("@jest/globals");

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
describe('Sums two values which type is number', () => {
  // Teste se o retorno de sum(4, 5) é 9
  it('Sums two values', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  // Teste se o retorno de sum(0, 0) é 0
  it('Sums 0 plus 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
});
describe('Tests with a non number parameter', () => {
  // Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
  it('Throws an error with a string parameter', () => {
    expect(() => sum(4, "5")).toThrow();
  });
  // Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
  it('Throws an error with the message "parameters must be numbers"', () => {
    expect(() => sum(4, "5")).toThrowError(new Error('parameters must be numbers'));
  });
});
