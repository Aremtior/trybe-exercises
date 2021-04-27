const { expect } = require("@jest/globals");

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
// Compare dois objetos (JSON) para verificar se são idênticos ou não
it('Compares if two objects are equal', () => {
  expect(obj1).toStrictEqual(obj2);
});
it('Compares if two objects are not equal', () => {
  expect(obj1).not.toStrictEqual(obj3);
});