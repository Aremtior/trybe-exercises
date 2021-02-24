let a = 20;
let b = 30;
let c = 130;

function anguloTriangulo() {
  if (a + b + c == 180) {
    console.log("É um triângulo");
    return true;
  } else {
    console.log("Não é um triângulo");
    return false;
  }
}

anguloTriangulo();
