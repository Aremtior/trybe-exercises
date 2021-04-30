const randNum = require('./randomNumber');

test('altera a implementação da função', () => {
  const mockRandom = jest
  .spyOn(randNum, 'retornaNumeroAleatorio')
  .mockImplementationOnce((a, b) => a / b)
  .mockReturnValue(11);

  mockRandom(10, 2);
  
  expect(mockRandom).toHaveBeenCalled();
  expect(mockRandom).toHaveBeenCalledTimes(1);
  expect(mockRandom()).toBe(11);
  expect(mockRandom).toHaveBeenCalledTimes(2);
  expect(mockRandom(2, 3)).toBe(11);
  expect(mockRandom).toHaveBeenCalledTimes(3);
});
