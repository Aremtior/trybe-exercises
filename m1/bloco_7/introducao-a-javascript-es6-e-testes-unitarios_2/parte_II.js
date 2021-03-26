const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const turno = (obj, key, value) => {
  obj[key] = value;
}

turno(lesson2, 'turno','manhã');
console.log(lesson2);

const keysObj = obj => {
  return Object.keys(obj);
}

console.log(keysObj(lesson1));

const lenObj = obj => {
  return Object.keys(obj).length;
}

console.log(lenObj(lesson3));

const vals = obj => {
  return Object.values(obj);
}

console.log(vals(lesson1));