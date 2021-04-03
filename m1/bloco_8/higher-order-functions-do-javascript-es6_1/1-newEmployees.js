const nameEmail = (name) => ({ name, email: `${name.split(' ').join('_')}@corporation.com` });
// console.log(nameEmail('Pedro Guerra'));

const newEmployees = () => {
  const employees = {
    id1: nameEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: nameEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: nameEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};
console.log(newEmployees());