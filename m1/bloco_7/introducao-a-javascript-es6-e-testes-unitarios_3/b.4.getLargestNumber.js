const assert = require('assert');

const getLargestNumber = (array) => {
  return array.sort((a, b) => b - a)[0];
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
const expected = getLargestNumber(parameter);
assert.strictEqual(typeof getLargestNumber, 'function');
assert.strictEqual(typeof expected, 'number');
assert.strictEqual(result, expected);