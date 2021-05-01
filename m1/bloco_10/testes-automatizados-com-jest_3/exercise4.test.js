const strFns = require('./stringFunctions');
jest.mock('./stringFunctions');

it('Testa função allUpper com nova implementação', () => {
  strFns.allUpper.mockImplementation((sentence) => sentence.toLowerCase());
  strFns.firstLetter.mockImplementation((sentence) => sentence.slice(sentence.length - 1));
  strFns.join.mockImplementation((sentence, otherSentence, bonusSentence) => `${sentence} ${otherSentence} ${bonusSentence}`);

  expect(strFns.allUpper('LAPA PALA ALAP ALPA APLA')).toBe('lapa pala alap alpa apla');
  expect(strFns.allUpper).toBeCalledTimes(1);
  expect(strFns.firstLetter('O valor é 504')).toBe('4');
  expect(strFns.firstLetter).toBeCalledTimes(1);
  expect(strFns.join('um', 'dois', 'três mil')).toBe('um dois três mil');
  expect(strFns.join).toBeCalledTimes(1);

});
