const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByAge = (age) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.age === age);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      };

      return reject({ error: 'Não possui animal com a idade buscada.' });
    }, 100);
  })
);

const getAnimals = (age) => {
  // Adicione o código aqui.
  return findAnimalsByAge(age).then(list => list)
};
// ---------------------

describe('Testando promise - findAnimalsByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne a lista de animais', () => {
      expect.assertions(1);
      return getAnimals(1).then(animals => {
        expect(animals).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimals(3).catch(error =>
        expect(error).toEqual({ error: 'Não possui animal com a idade buscada.' })
      );
    });
  });
});