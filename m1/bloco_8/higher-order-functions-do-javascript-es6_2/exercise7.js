const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  // https://dev.to/huyddo/find-duplicate-or-repeat-elements-in-js-array-3cl3
  return !books.some( (book, index) => books.indexOf(book.author.birthYear) !== index );
}

assert.strictEqual(authorUnique(), expectedResult);

// checkDuplicate();
// function checkDuplicate() {
//   let arr = ["abc", "xy", "bb", "abc"];
//   let result = false;
//   // call some function with callback function as argument
//   result = arr.some((element, index) => { return arr.indexOf(element) !== index });
//   if (result) {
//     console.log('Array contains duplicate elements');
//   } else {
//     console.log('Array does not contain duplicate elements');
//   }
// }
