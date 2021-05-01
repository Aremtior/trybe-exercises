const randNum = require('./randomNumber');

test('retorna 10 ao chamar a função', () => {
  randNum.retornaNumeroAleatorio = jest.fn().mockReturnValue(10);
  randNum.retornaNumeroAleatorio();
  expect(randNum.retornaNumeroAleatorio).toHaveBeenCalled();
  expect(randNum.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
  expect(randNum.retornaNumeroAleatorio()).toBe(10);
  expect(randNum.retornaNumeroAleatorio).toHaveBeenCalledTimes(2);
});