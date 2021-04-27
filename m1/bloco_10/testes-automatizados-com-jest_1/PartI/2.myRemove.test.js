const { expect } = require("@jest/globals");

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
describe('Final array is not equal to initial array', () => {
  it('Return new array without specified item', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
  });
  // Verifique se o array passado por parâmetro não sofreu alterações
  it('Final array has not changed', () => {
    expect(myRemove([1, 2, 3, 4], 15)).toStrictEqual([1, 2, 3, 4]);
  });
  // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
  it('Returns an expected array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
  });
})