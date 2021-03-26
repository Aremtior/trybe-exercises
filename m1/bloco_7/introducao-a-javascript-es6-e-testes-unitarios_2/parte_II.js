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

turno(lesson2, 'turno', 'manhã');
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

const allLessons = Object.assign({}, { lesson1: lesson1 }, { lesson2: lesson2 }, { lesson3: lesson3 });
console.log('####################');
console.log(allLessons);

const totalStudents = obj => {
  let numberStudents = 0;
  for (const lesson in obj) {
    numberStudents += obj[lesson].numeroEstudantes;
  }
  return numberStudents;
}

totalStudents(allLessons);
console.log(totalStudents(allLessons));

const getValueByNumber = (lesson, index) => {
  return Object.values(lesson)[index];
}

console.log(getValueByNumber(lesson3, 3));

const verifyPair = (obj, key, value) => {
  const o = Object.entries(obj);
  for (let i = 0; i < o.length; i += 1) {
    if (o[i][0] === key && o[i][1] === value) {
      return true;
    }
  }
  return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false