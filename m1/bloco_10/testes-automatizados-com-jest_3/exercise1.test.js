function retornaNumeroAleatorio() {
  return Math.floor(Math.random() * 100);
}

test('retorna 10 ao chamar a função', () => {
  retornaNumeroAleatorio = jest.fn().mockReturnValue(10);
  retornaNumeroAleatorio();
  expect(retornaNumeroAleatorio).toHaveBeenCalled();
  expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
  expect(retornaNumeroAleatorio()).toBe(10);
  expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(2);
});