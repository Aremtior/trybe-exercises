let salarioBruto = 3000;
let salarioLiquido = 0;

function calculaSalarioBase(salarioBruto) {
  if (salarioBruto > 0) {
    if (salarioBruto <= 1556.94) {
      calculaSalarioLiquido(salarioBruto - salarioBruto * 0.08);
    } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
      calculaSalarioLiquido(salarioBruto - salarioBruto * 0.09);
    } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
      calculaSalarioLiquido(salarioBruto - salarioBruto * 0.11);
    } else {
      calculaSalarioLiquido(salarioBruto - 570.88);
    }
  } else {
    console.log("informe um valor maior que 0");
  }
}

function calculaSalarioLiquido(salarioBase) {
  if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBase;
  } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    salarioLiquido = salarioBase - (salarioBase * 0.075 - 142.8);
  } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    salarioLiquido = salarioBase - (salarioBase * 0.15 - 354.8);
  } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    salarioLiquido = salarioBase - (salarioBase * 0.225 - 636.13);
  } else {
    salarioLiquido = salarioBase - (salarioBase * 0.275 - 869.36);
  }
}

calculaSalarioBase(salarioBruto);
console.log("Salário Líquido: " + salarioLiquido);