const { expect, it } = require("@jest/globals");

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  const professionalInfo = professionalBoard.find((professional) => professional.id === id);
  if (!professionalInfo) {
    throw new Error('ID não identificada');
  }
  if (!professionalInfo[detail]) {
    throw new Error('Informação indisponível');
  }
  return professionalInfo[detail];
};

describe('Tests for searchEmployee function', () => {
  it('tests if the searchEmployee function is defined', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('tests if the searchEmployee is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('tests for search with an existing id', () => {
    expect(searchEmployee('8579-6', 'firstName')).toEqual('Ana');
    expect(searchEmployee('8579-6', 'lastName')).toEqual('Gates');
    expect(searchEmployee('8579-6', 'specialities')).toEqual(['UX', 'Design']);
    expect(searchEmployee('1256-4', 'firstName')).toEqual('Linda');
    expect(searchEmployee('1256-4', 'lastName')).toEqual('Bezos');
    expect(searchEmployee('1256-4', 'specialities')).toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
  });
  it('tests if an id not exists', () => {
    expect(() => searchEmployee('8579', 'firstName')).toThrow();
    expect(() => searchEmployee('8579', 'firstName')).toThrowError(new Error('ID não identificada'));
  })
  it('tests if the information is not available', () => {
    expect(() => searchEmployee('1256-4', 'firstLast')).toThrow();
    expect(() => searchEmployee('1256-4', 'firstLast')).toThrowError('Informação indisponível');
  });
});