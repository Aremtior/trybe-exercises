const retornaNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100);
}
console.log(retornaNumeroAleatorio());

module.exports = { retornaNumeroAleatorio };
