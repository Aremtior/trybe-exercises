const { STRIDER } = require('ci-info');
const strFns = require('./stringFunctions');

it('Testa função allUpper com nova implementação', () => {
  const lowerTest = jest
  .spyOn(strFns, 'allUpper')
  .mockImplementation((sentence) => sentence.toLowerCase());

  expect(lowerTest('LAPA PALA ALAP ALPA APLA')).toBe('lapa pala alap alpa apla');
  expect(lowerTest).toBeCalledTimes(1);
  
  strFns.allUpper.mockRestore();
  expect(strFns.allUpper('Associação moradores da Lagoa')).toBe('ASSOCIAÇÃO MORADORES DA LAGOA');
  expect(typeof strFns.allUpper).toBe('function');

});
