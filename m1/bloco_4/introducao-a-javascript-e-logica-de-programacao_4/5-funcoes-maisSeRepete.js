let values = [2, 2, 3, 4, 3, 5, 8, 5, 4, 6, 2, 3, 1, 6, 1, 4, 2];
let values2 = [52, 58, 45, 74, 64, 32, 53, 74];
let numOfValuesMostRepeated = 0;
let mostRepeatedValue;

function mostRepeated(values) {
  // if (values.length > 0) {  
  for (const key in values) {
    value = values[key];
    // console.log("Key: " + key + " / value: " + value);
    numberOfValues = 0;
    index = values.indexOf(value);
    while (index != -1) {
      numberOfValues++;
      // console.log(index);
      // values.splice(index, 1);
      index = values.indexOf(value, index + 1);
    }
    if (numOfValuesMostRepeated < numberOfValues) {
      numOfValuesMostRepeated = numberOfValues;
      mostRepeatedValue = value;
      // console.log("Entrando no if na " + key + "ª iteração.");
      // console.log(mostRepeatedValue + " - " + numOfValuesMostRepeated);
    }
  }  
  // mostRepeated(values);
  // }
  console.log("O valor " + mostRepeatedValue + " se repete " + numOfValuesMostRepeated + " vezes");
  numOfValuesMostRepeated = 0;
  // console.log(values.length);
}

mostRepeated(values);
mostRepeated(values2);