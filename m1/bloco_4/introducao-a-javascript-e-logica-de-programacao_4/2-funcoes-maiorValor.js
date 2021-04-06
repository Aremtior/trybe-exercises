function greatestValueIndex(values) {
  let greatestValue = values[0];
  let index = 0;
  for (const key in values) {
    if (values[key] > greatestValue) {
      greatestValue = values[key];
      index = key;
    }
  }
  console.log(index);
}
let values = [2, 4, 5, 8, 1, 3, 0, 7];
greatestValueIndex(values);