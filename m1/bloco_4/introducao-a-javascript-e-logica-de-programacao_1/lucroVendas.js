let valorCusto = 200;
let valorVenda = 800;
let lucro = 0;
const imposto = 0.2;

if (valorCusto >= 0 && valorVenda >= 0 && imposto >= 0 && valorVenda > valorCusto + valorCusto * imposto) {
  lucro += 1000 * (valorVenda - (valorCusto + valorCusto * imposto));
}

console.log("Valor de custo total: " + (valorCusto + valorCusto * imposto));
console.log("Lucro: " + lucro);