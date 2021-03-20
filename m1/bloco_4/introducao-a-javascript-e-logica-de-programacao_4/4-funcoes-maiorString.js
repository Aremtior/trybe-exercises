function greatestName(names) {
  let greatestLengthName = names[0];
  let nameLength = names[0].length;
  for (const key in names) {
    console.log(names[key] + ": " + names[key].length);
    if (names[key].length > nameLength) {
      greatestLengthName = names[key];
      nameLength = names[key].length;
    }
  }
  console.log(greatestLengthName);
}

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
greatestName(names)