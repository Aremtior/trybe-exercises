const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let n = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results.push(n += 1);
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';
const expected = removeVowels(parameter);
assert.strictEqual(typeof removeVowels, 'function');
assert.strictEqual(expected, result);