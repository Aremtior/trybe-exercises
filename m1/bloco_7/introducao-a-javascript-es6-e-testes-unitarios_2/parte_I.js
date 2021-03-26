const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// 1. Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// - Note que o parâmetro da função já está sendo passado na chamada da função.

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  let result = 'Olá ';
  result += `${Object.values(order.order.delivery)[0]}, `;
  result += `entrega para: ${Object.values(order)[0]}, `;
  result += `Telefone: ${Object.values(order)[1]}, `;
  result += `R. ${Object.values(order.address)[0]}, `;
  result += `Nº: ${Object.values(order.address)[1]}, `;
  result += `AP: ${Object.values(order.address)[2]}`;
  return result;
}

customerInfo(order);
// console.log(customerInfo(order));

// 2. Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
// - Modifique o nome da pessoa compradora.
// - Modifique o valor total da compra para R$ 50,00.

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.order.pizza.muzzarella = {
    amount: 1,
    price: 20,
  };
  order.order.pizza.calabresa = {
    amount: 1,
    price: 20,
  };
  order.payment.total = 50;
  let result = 'Olá ';
  result += `${Object.values(order)[0]}, `;
  result += `o total do seu pedido de ${Object.keys(order.order.pizza)[2]}, `;
  result += `${Object.keys(order.order.pizza)[3]} `;
  result += `e ${Object.values(order.order.drinks.coke)[0]} `;
  result += `é R$ ${Object.values(order.payment)[0]},00`;
  console.log(result);
}

orderModifier(order);
