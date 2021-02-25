let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
for (let i = 0; i < numbers.length; i++) {
  soma += numbers[i];
}
media = soma / numbers.length;
if (media > 20) {
  console.log("Média é maior que 20: " + media);
} else {
  console.log("Média é menor ou igual a 20: " + media);
}