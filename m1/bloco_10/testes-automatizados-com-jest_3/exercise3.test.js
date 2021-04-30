const randNum = require('./randomNumber');

test('altera a implementação da função - recebe 3 parâmetros e os multiplica', () => {
  const mockRandom = jest
  .spyOn(randNum, 'retornaNumeroAleatorio')
  .mockImplementation((a, b, c) => a * b * c)

  mockRandom(10, 2, 5);
  
  expect(mockRandom).toHaveBeenCalled();
  expect(mockRandom).toHaveBeenCalledTimes(1);
  expect(mockRandom(10, 2, 5)).toBe(100);
  expect(mockRandom).toHaveBeenCalledTimes(2);
  expect(mockRandom(2, 3, 6)).toBe(36);
  expect(mockRandom).toHaveBeenCalledTimes(3);

  randNum.retornaNumeroAleatorio.mockRestore();
  const mockDouble = jest
  .spyOn(randNum, 'retornaNumeroAleatorio')
  .mockImplementation((a) => 2 * a);

  mockDouble(4);

  expect(mockDouble).toHaveBeenCalled();
  expect(mockDouble).toHaveBeenCalledTimes(1);
  expect(mockDouble(10)).toBe(20);
  expect(mockDouble).toHaveBeenCalledTimes(2);
  expect(mockDouble(5)).toBe(10);
  expect(mockDouble).toHaveBeenCalledTimes(3);
});
