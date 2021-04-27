const { it, expect } = require("@jest/globals");

const vowels = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5
}

function encode(sentence) {
  const arrSentence = sentence.split('');
  const encodeSentence = arrSentence.map(character => vowels[character] ? vowels[character] : character);
  return encodeSentence.join('');
}

function decode(sentence) {
  const arrSentence = sentence.split('');
  const vowelsNumbers = Object.entries(vowels);
  const decodeSentence = arrSentence.map(character => {
    const vowel = vowelsNumbers.find(vowNum => vowNum[1] == character);
    return vowel ? vowel[0] : character;
  });
  return decodeSentence.join('');
}
console.log(typeof decode);

// Teste se encode e decode são funções;
describe('tests if encode and decode are functions', () => {
  it('tests if encode is a function', () => {
    expect(typeof encode).toBe('function');
  });
  it('tests if decode is a function', () => {
    expect(typeof decode).toBe('function');
  });
})
// Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
it('tests if the vowels aeiou become numbers 12345', () => {
  expect(encode('aeiou')).toEqual('12345');
});
// Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
it('tests if the numbers 12345 become aeiou', () => {
  expect(decode('12345')).toEqual('aeiou');
});
// Teste se as demais letras/números não são convertidos para cada caso;
it('tests if other characters do not change', () => {
  expect(encode('bcdfghjklmnpqrstvwxyz')).toEqual('bcdfghjklmnpqrstvwxyz');
  expect(decode('bcdfghjklmnpqrstvwxyz')).toEqual('bcdfghjklmnpqrstvwxyz');
});
// Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
it('tests if the both initial string and result have the same length', () => {
  expect(encode('anything to test').length).toEqual('anything to test'.length);
});
