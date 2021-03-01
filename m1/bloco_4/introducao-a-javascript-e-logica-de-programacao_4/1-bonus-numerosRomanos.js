let romanos = {
  I: 1,
  IV: 4,
  V:5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000
}
// espressão para aceitar somente números romanos dentro do padrão:
// (^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$)
// a expressão regular a seguir aceita qualquer entrada, mesmo fora do padrão.
let re = /^([MDCLXVI]+)$/g;
function romanToDecimal(romanValue) {
  if (romanValue.search(re) != -1) {    
    let result = 0;
    for (let i = 0; i < romanValue.length; i++) {
      if (romanos[romanValue[i]] < romanos[romanValue[i + 1]]) {
        result += (romanos[romanValue[i + 1]] - romanos[romanValue[i]]);
        i++;
      } else {
        result += romanos[romanValue[i]];
      }
    }
    if (result < 4000) {
      decimalToRoman(result, romanValue);
      console.log("O valor correspondente em decimal é: " + result);      
    } else {
      console.log("Insira um valor até o máximo de 3999.");
    }
  } else {
    console.log("Você deve inserir um número romano válido (caracteres permitidos: MDCLXVI)");
  }
}

function decimalToRoman(decimalValue, roman) {
  let properties = Object.keys(romanos).reverse();
  let romanValue = '';
  let timesAppear = 0;
  for (let i = 0; i < properties.length; i++) {
    if (decimalValue != 0) {      
      if (decimalValue >= romanos[properties[i]]) {
        timesAppear = (decimalValue / romanos[properties[i]]) >> 0; // >> 0 serve para tornar o resultado da divisão inteiro. Poderia ser usado também << 0 / ^0 / | 0 / ~~0
        decimalValue = decimalValue % romanos[properties[i]];
        while (timesAppear > 0) {
          romanValue += properties[i];
          timesAppear--;
        }          
      }
    } else {
      break;
    }
  }
  if (romanValue != roman) {
    console.log("Você quis dizer: " + romanValue);
  }
}

let numeralRomano = "mccc";
romanToDecimal(numeralRomano.toUpperCase());
numeralRomano = "cdcm";
romanToDecimal(numeralRomano.toUpperCase());
numeralRomano = "il";
romanToDecimal(numeralRomano.toUpperCase());
numeralRomano = "xlix";
romanToDecimal(numeralRomano.toUpperCase());
numeralRomano = "xm";
romanToDecimal(numeralRomano.toUpperCase());
numeralRomano = "xmt";
romanToDecimal(numeralRomano.toUpperCase());
numeralRomano = "mmmm";
romanToDecimal(numeralRomano.toUpperCase());

