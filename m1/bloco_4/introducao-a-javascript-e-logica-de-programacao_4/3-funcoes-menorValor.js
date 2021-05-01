function leastValueIndex(values) {
  let leastValue = values[0];
  let index = 0;
  for (const key in values) {
    if (values[key] < leastValue) {
      leastValue = values[key];
      index = key;
    }
  }
  console.log(index);
}
let values = [2, 4, 5, 8, 1, 3, 0, 7];
leastValueIndex(values);